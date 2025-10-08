import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const theme = writable<'light' | 'dark'>(browser && localStorage.getItem('theme') as 'light' | 'dark' || 'light');

export function applyTheme(t: 'light' | 'dark') {
  if (!browser) return;
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(t);
  localStorage.setItem('theme', t);
}

// load saved theme
if (browser) {
  const saved = localStorage.getItem('theme');
  if (saved) {
    theme.set(saved);
    applyTheme(saved);
  }

  // save to localStorage and apply class on change
  theme.subscribe((t) => {
    localStorage.setItem('theme', t);
    applyTheme(t);
  });
}
