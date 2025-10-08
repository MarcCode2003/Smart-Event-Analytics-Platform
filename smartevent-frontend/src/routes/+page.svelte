<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchEvents } from '$lib/api';
  import EventCard from '$lib/components/EventCard.svelte';

  let events = [];
  let loading = true;

  onMount(async () => {
    events = await fetchEvents();
    loading = false;
  });
</script>

<section class="py-8">
  <div class="text-center mb-8">
    <h1 class="text-4xl font-bold">Smart Event Analytics</h1>
    <p class="text-gray-600">Manage events and view analytics.</p>
  </div>

  {#if loading}
    <div>Loading events…</div>
  {:else if events.length === 0}
    <div>No events yet.</div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each events as ev (ev.id)}
        <EventCard event={ev} />
      {/each}
    </div>
  {/if}
</section>
