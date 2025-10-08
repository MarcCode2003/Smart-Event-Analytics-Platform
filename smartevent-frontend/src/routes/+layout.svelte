<script lang="ts">
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { theme, applyTheme, initThemeListener } from '$lib/stores/theme';

  onMount(() => {
    // read current store and apply
    let current: import('$lib/stores/theme').Theme;
    const unsub = theme.subscribe((t) => (current = t));
    applyTheme(current!);
    initThemeListener();
    unsub();
  });
</script>


<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 font-[Inter]">
  <Navbar />

  <main
    in:fade={{ duration: 400 }}
    out:fade={{ duration: 400 }}
    class="max-w-7xl mx-auto px-6 sm:px-8 py-10 transition-all duration-500"
  >
    <slot />
  </main>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3b82f6, #06b6d4);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #60a5fa, #22d3ee);
  }
</style>