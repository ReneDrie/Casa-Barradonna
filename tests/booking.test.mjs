import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

async function loadFunction(path) {
  const entry = fileURLToPath(new URL(path, import.meta.url));
  const result = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

const { onRequestPost } = await loadFunction('../functions/api/booking-request.ts');
const { onRequestGet } = await loadFunction('../functions/api/availability.ts');

const validRequest = {
  arrival: '2027-04-10', departure: '2027-04-14', guests: '2', name: 'Sample Guest',
  email: 'guest@example.test', message: 'A quiet stay', privacy: 'on',
  'cf-turnstile-response': 'test-token',
};
const makeRequest = (body) => new Request('https://example.test/api/booking-request', {
  method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
});

test('request endpoint remains closed without delivery configuration', async () => {
  const response = await onRequestPost({ request: makeRequest(validRequest), env: {} });
  assert.equal(response.status, 503);
});

test('invalid dates are rejected before external services are called', async () => {
  const response = await onRequestPost({
    request: makeRequest({ ...validRequest, departure: '2027-04-11' }),
    env: { BOOKING_REQUESTS_ENABLED: 'true', RESEND_API_KEY: 'test', BOOKING_TO_EMAIL: 'owner@example.test', BOOKING_FROM_EMAIL: 'site@example.test', TURNSTILE_SECRET_KEY: 'test' },
  });
  assert.equal(response.status, 400);
});

test('blocked calendar nights are flagged and a valid enquiry stays a request', async () => {
  const originalFetch = globalThis.fetch;
  const outbound = [];
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    outbound.push({ url, init });
    if (url.includes('siteverify')) return Response.json({ success: true });
    if (url.endsWith('.ics')) return new Response('BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART;VALUE=DATE:20270411\nDTEND;VALUE=DATE:20270413\nEND:VEVENT\nEND:VCALENDAR');
    if (url.includes('api.resend.com/emails')) return Response.json({ id: 'test-id' });
    throw new Error(`Unexpected fetch: ${url}`);
  };
  try {
    const env = { BOOKING_REQUESTS_ENABLED: 'true', RESEND_API_KEY: 'test', BOOKING_TO_EMAIL: 'owner@example.test', BOOKING_FROM_EMAIL: 'site@example.test', TURNSTILE_SECRET_KEY: 'test', AIRBNB_ICAL_URL: 'https://example.test/calendar.ics' };
    const availability = await onRequestGet({ request: new Request('https://example.test/api/availability?arrival=2027-04-10&departure=2027-04-14'), env });
    assert.equal((await availability.json()).status, 'blocked');
    const response = await onRequestPost({ request: makeRequest(validRequest), env });
    assert.equal(response.status, 202);
    const delivery = outbound.find((entry) => entry.url.includes('api.resend.com/emails'));
    assert.ok(delivery);
    const email = JSON.parse(delivery.init.body);
    assert.match(email.text, /Calendar check: blocked/);
    assert.match(email.text, /This is a request, not a confirmed booking/);
  } finally { globalThis.fetch = originalFetch; }
});
