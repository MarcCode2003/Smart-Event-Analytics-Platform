<script lang="ts">
  import { theme, applyTheme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { derived } from 'svelte/store';

  // make a derived store for easier reactive usage
  const current = derived(theme, ($theme) => $theme);

  function toggle() {
    theme.update((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      if (browser) applyTheme(next);
      return next;
    });
  }

  onMount(() => {
    // ensure initial theme is applied
    if (browser) {
      theme.subscribe((t) => applyTheme(t));
    }
  });
</script>

<button
  aria-label="Toggle theme"
  class="p-2 rounded-md focus:outline-none transition-all hover:scale-105 z-50"
  on:click={toggle}
  title="Toggle light/dark"
>
  {#if $current === 'dark'}
    <!-- sun icon for switching to light -->
    <svg class="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
    </svg>
  {:else}
    <!-- moon icon for switching to dark -->
    <svg class="w-6 h-6 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {/if}
</button>
