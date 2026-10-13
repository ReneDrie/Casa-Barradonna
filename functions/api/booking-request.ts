import { calendarStatus, nightsBetween, validDate } from '../lib/calendar';

interface Env {
  BOOKING_REQUESTS_ENABLED?: string;
  RESEND_API_KEY?: string;
  BOOKING_TO_EMAIL?: string;
  BOOKING_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
  AIRBNB_ICAL_URL?: string;
  PUBLIC_FIRST_REQUEST_DATE?: string;
}
interface Context { request: Request; env: Env }

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  if (env.BOOKING_REQUESTS_ENABLED !== 'true' || !env.RESEND_API_KEY || !env.BOOKING_TO_EMAIL || !env.BOOKING_FROM_EMAIL || !env.TURNSTILE_SECRET_KEY) {
    return Response.json({ error: 'Booking requests are not open' }, { status: 503 });
  }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'Expected JSON' }, { status: 415 });
  }
  let data: Record<string, unknown>;
  try { data = await request.json() as Record<string, unknown>; }
  catch { return Response.json({ error: 'Invalid JSON' }, { status: 400 }); }
  if (data.website) return Response.json({ ok: true });

  const { arrival, departure, name, email, message, guests, privacy } = data;
  const firstDate = validDate(env.PUBLIC_FIRST_REQUEST_DATE) ? env.PUBLIC_FIRST_REQUEST_DATE : '2027-04-01';
  const today = new Date().toISOString().slice(0, 10);
  if (!validDate(arrival) || !validDate(departure) || arrival < firstDate || arrival < today || nightsBetween(arrival, departure) < 3 || nightsBetween(arrival, departure) > 60) {
    return Response.json({ error: 'Invalid stay dates' }, { status: 400 });
  }
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100 || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200 || typeof guests !== 'string' || !Number.isInteger(Number(guests)) || Number(guests) < 1 || Number(guests) > 12 || privacy !== 'on' || (typeof message !== 'string' && message !== undefined) || (typeof message === 'string' && message.length > 1000)) {
    return Response.json({ error: 'Invalid request details' }, { status: 400 });
  }

  const token = data['cf-turnstile-response'];
  if (typeof token !== 'string' || !token) return Response.json({ error: 'Verification required' }, { status: 400 });
  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
  });
  const verificationResult = await verification.json() as { success?: boolean };
  if (!verificationResult.success) return Response.json({ error: 'Verification failed' }, { status: 400 });

  const availability = await calendarStatus(env.AIRBNB_ICAL_URL, arrival, departure);
  const body = [
    'New Casa Barradonna booking request',
    '',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Arrival: ${arrival}`,
    `Departure: ${departure}`,
    `Guests: ${guests}`,
    `Calendar check: ${availability} (indicative only)`,
    '',
    'Guest message:',
    typeof message === 'string' ? message.trim() : '',
    '',
    'This is a request, not a confirmed booking.',
  ].join('\n');
  const delivery = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: env.BOOKING_FROM_EMAIL, to: [env.BOOKING_TO_EMAIL], reply_to: email.trim(), subject: `Booking request · ${arrival} to ${departure}`, text: body }),
  });
  if (!delivery.ok) return Response.json({ error: 'Could not deliver request' }, { status: 502 });
  return Response.json({ ok: true }, { status: 202 });
}
