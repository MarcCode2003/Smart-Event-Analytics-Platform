<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchEvent } from '$lib/api';
  import { page } from '$app/stores';

  let event = null;
  let loading = true;

  onMount(async () => {
    const id = $page.params.id;
    event = await fetchEvent(id);
    loading = false;
  });
</script>

{#if loading}
  <div>Loading event…</div>
{:else if !event}
  <div>Event not found.</div>
{:else}
  <article class="bg-white p-6 rounded shadow">
    <h2 class="text-2xl font-bold">{event.title}</h2>
    <p class="text-gray-600 mt-3">{event.description}</p>
    <div class="mt-4 text-sm text-gray-500">Date: {event.date}</div>
    <div class="mt-2 text-sm text-gray-500">Attendees: {event.attendees ?? 0}</div>
  </article>
{/if}
