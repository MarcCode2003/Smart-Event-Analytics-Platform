import { writable } from 'svelte/store';

type User = { id: string; username: string; displayName?: string } | null;

const initial = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('seap_user') || 'null') : null;
export const user = writable<User>(initial);

user.subscribe((u) => {
  if (typeof window !== 'undefined') localStorage.setItem('seap_user', JSON.stringify(u));
});
