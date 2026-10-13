import { calendarStatus, nightsBetween, validDate } from '../lib/calendar';

interface Env { AIRBNB_ICAL_URL?: string }
interface Context { request: Request; env: Env }

export async function onRequestGet({ request, env }: Context): Promise<Response> {
  const url = new URL(request.url);
  const arrival = url.searchParams.get('arrival');
  const departure = url.searchParams.get('departure');
  if (!validDate(arrival) || !validDate(departure) || nightsBetween(arrival, departure) < 1) {
    return Response.json({ error: 'Invalid dates' }, { status: 400 });
  }
  const status = await calendarStatus(env.AIRBNB_ICAL_URL, arrival, departure);
  return Response.json({ status, checkedAt: new Date().toISOString() }, { headers: { 'cache-control': 'public, max-age=300' } });
}
