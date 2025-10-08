<script lang="ts">
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { browser } from '$app/environment';

  let u;
  user.subscribe((v) => u = v);

  function logout() {
    user.set(null);
    if (browser) {
      localStorage.removeItem('seap_user');
    }
    goto('/');
  }


</script>

<nav class="flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
  <div class="flex items-center gap-6">
    <a href="/" class="text-2xl font-bold text-gray-900 dark:text-white">SmartEvent</a>
    <a href="/events" class="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">Events</a>
    <a href="/dashboard" class="text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white">Dashboard</a>
  </div>
  
  <div class="flex items-center gap-3">
    <ThemeToggle />
    {#if $u}
      <span class="text-sm text-gray-700 dark:text-slate-200">Hi, {$u.displayName ?? $u.username}</span>
      <button on:click={logout} class="px-3 py-1 bg-red-600 text-white rounded">Logout</button>
    {:else}
      <a href="/login" class="px-3 py-1 bg-blue-600 text-white rounded">Login</a>
    {/if}
  </div>



</nav>
