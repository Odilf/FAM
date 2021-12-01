<script>
	import { flip } from 'svelte/animate'
	import tippy from 'tippy.js'

	import Input from "./Input.svelte"
	import { photos, sorted, Parameters } from '$lib/photos'

	let parameters = new Parameters()
	
</script>

<main>
	<header>
		{#each Object.entries(parameters) as [parameter, value]}
			<Input bind:value={parameters[parameter]}> {parameter.charAt(0).toUpperCase() + parameter.slice(1)} </Input>
		{/each}
	</header>

	<section>
		{#each sorted(parameters) as photo (photo.url)}
			<li 
				animate:flip={{duration: 200}} 
				
			>
				<img src={photo.url} alt={photo.alt} />
			</li>
		{/each}
		<li></li>
	</section>
</main>

<style>
	section {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	header {
		display: flex;
		flex-direction: column;
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

	@media (max-aspect-ratio: 1/1) {
		li {
			height: 20vh;
		}
	}
</style>