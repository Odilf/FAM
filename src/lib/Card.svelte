<script lang="ts">
	export let color = 'var(--secondary)'
	export let expanded = false

	import type { Photo } from '$lib/photos'

	export let photo: Photo

</script>

<main style='--color: {color}' on:click={() => expanded = !expanded} class:expanded>
	<header>
		<img src={photo.src} alt={photo.alt}>
		<h1> <slot name='heading'/> </h1>
	</header>
	<section>
		<p>
			<slot/>
		</p>
	</section>
</main>

<style>
	main {
		width: min(300px, 95vw);
		height: fit-content;
		background-color: var(--color);
		color: white;

		cursor: pointer;

		border-radius: 1em;
		overflow: hidden;

		transition: all 0.5s ease;
		margin: 2em;
	}

	.expanded {
		cursor: auto;
		margin-left: 0;
		margin-right: 0;
		width: min(500px, 95vw);
	}

	section {
		padding: 1em;
	}

	p {
		margin-top: 0;
		max-height: 200px;
		overflow: scroll;
	}

	img {
		width: 100%;
		height: min(200px, 95vh);
		object-fit: cover;
		transition: all 0.8s ease;
		filter: brightness(50%);
		cursor: pointer;
	}
	img:hover {
		filter: brightness(1);
		height: min(250px, 95vh);
	}

	header {
		position: relative;
	}

	h1 {
		position: absolute;
		bottom: 1rem;
		font-size: 3em;
		margin: 0;
		left: 1rem;
		right: 1rem;
	}
</style>