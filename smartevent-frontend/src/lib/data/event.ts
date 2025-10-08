export type EventItem = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  attendees?: number;
};

export let events: EventItem[] = [
  { id: '1', title: 'Orientation 2025', description: 'Welcome to new students', date: '2025-10-15', attendees: 120 },
  { id: '2', title: 'Tech Talk: Go', description: 'Building APIs with Go', date: '2025-11-01', attendees: 85 },
];
