import { json } from '@sveltejs/kit';
import { events, type EventItem } from '$lib/data/events';

export const GET = async () => {
  return json(events);
};

export const POST = async ({ request }) => {
  const body = await request.json();
  const newEvent: EventItem = { id: String(Date.now()), ...body };
  events.unshift(newEvent);
  return json(newEvent, { status: 201 });
};
