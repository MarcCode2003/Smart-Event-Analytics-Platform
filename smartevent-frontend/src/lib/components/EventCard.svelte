<script lang="ts">
  export let event: { id: string; title: string; description?: string; date?: string; attendees?: number };
</script>

<article class="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md">
  <h3 class="text-lg font-semibold">{event.title}</h3>
  <p class="text-sm text-gray-600 mt-2">{event.description}</p>

  <div class="mt-4 flex items-center justify-between text-sm text-gray-500">
    <span>{event.date ?? 'TBD'}</span>
    <a class="text-blue-600 hover:underline" href={`/events/${event.id}`}>View</a>
  </div>
</article>
