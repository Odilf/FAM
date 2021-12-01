<script>
	import Back from "$lib/Back.svelte";

	import { photos } from '$lib/photos'

	// let split_photos = []
	// let size = 3
	// $: while (photos.length > 0)
	// 	split_photos.push(photos.splice(0, size));
</script>

<Back />
<h1> Gallery </h1>

<main>
	{#each photos as photo}
		<li>
			<img src={photo.url} alt={photo.alt} />
		</li>
	{/each}
	<li></li>
</main>

<footer>
	(More photos are soon to be added)
</footer>

<style>
	main {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	li {
		height: 40vh;
		flex-grow: 1;
		list-style: none;

		box-sizing: border-box;
		padding: 1em;
	}
	li:last-child {
		flex-grow: 10;
	}
	img {
		max-height: 100%;
		min-width: 100%;
		object-fit: cover;
		vertical-align: bottom;
		
		border: 5px solid;
	}

	footer {
		padding: 3em;
		opacity: 40%;
	}

	@media (max-aspect-ratio: 1/1) {
		li {
			height: 20vh;
		}
	}
</style>