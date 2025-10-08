export type EventItem = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  attendees?: number;
};

export async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch('/api/events');
  if (!res.ok) return [];
  return res.json();
}

export async function fetchEvent(id: string): Promise<EventItem | null> {
  const res = await fetch(`/api/events/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function createEvent(payload: Partial<EventItem>) {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}
