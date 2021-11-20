<script context="module">
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch, page }) => {
		const res = await fetch(`/media/${page.params.slug}.json`);
		if (res.ok) {
			const photos = await res.json();
			return {
				props: { photos, slug: page.params.slug }
			};
		}
		const { message } = await res.json();
		return {
			status: res.status,
			error: new Error(message)
		};
	};
</script>

<script>
	export let photos;
    export let slug;
</script>

<div class="todos">
	<h1>Photos - {slug}</h1>

	{#each photos as photo (photo.id)}
		<h1>{photo.title}</h1>
	{/each}
</div>
