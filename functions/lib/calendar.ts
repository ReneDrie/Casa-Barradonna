export type CalendarStatus = 'available' | 'blocked' | 'unknown';

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export function validDate(value: unknown): value is string {
  if (typeof value !== 'string' || !datePattern.test(value)) return false;
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value;
}

export function nightsBetween(arrival: string, departure: string): number {
  return (Date.parse(`${departure}T00:00:00Z`) - Date.parse(`${arrival}T00:00:00Z`)) / 86400000;
}

function icsDate(value: string): string | null {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})$/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
}

export function parseBlockedRanges(ics: string): { start: string; end: string }[] {
  const unfolded = ics.replace(/\r?\n[ \t]/g, '');
  return unfolded.split('BEGIN:VEVENT').slice(1).flatMap((event) => {
    const segment = event.split('END:VEVENT')[0];
    if (/^STATUS:CANCELLED\s*$/m.test(segment)) return [];
    const start = segment.match(/^DTSTART(?:;[^:]*)?:(\d{8})\s*$/m);
    const end = segment.match(/^DTEND(?:;[^:]*)?:(\d{8})\s*$/m);
    const startDate = start && icsDate(start[1]);
    const endDate = end && icsDate(end[1]);
    return startDate && endDate && startDate < endDate ? [{ start: startDate, end: endDate }] : [];
  });
}

export async function calendarStatus(url: string | undefined, arrival: string, departure: string): Promise<CalendarStatus> {
  if (!url) return 'unknown';
  try {
    const calendarUrl = new URL(url);
    if (calendarUrl.protocol !== 'https:') return 'unknown';
    const response = await fetch(calendarUrl.toString(), { headers: { Accept: 'text/calendar' } });
    if (!response.ok) return 'unknown';
    const ics = await response.text();
    if (!ics.includes('BEGIN:VCALENDAR') || !ics.includes('END:VCALENDAR')) return 'unknown';
    const activeEventCount = ics.split('BEGIN:VEVENT').slice(1).filter((event) => !/^STATUS:CANCELLED\s*$/m.test(event.split('END:VEVENT')[0])).length;
    const ranges = parseBlockedRanges(ics);
    if (ranges.length !== activeEventCount) return 'unknown';
    return ranges.some((range) => arrival < range.end && departure > range.start) ? 'blocked' : 'available';
  } catch {
    return 'unknown';
  }
}
