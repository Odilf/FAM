<script lang='ts'>
	import { fade, fly } from 'svelte/transition'
	import { flip } from 'svelte/animate'

	import { sorted, Parameters } from '$lib/photos'
	import Input from "./Input.svelte"
	import Photo from './Photo.svelte';

	let parameters = new Parameters([100, 10, 10, 50, 10], false)

	let showParameters = true
	
</script>

<main>
	<button on:click={() => showParameters = !showParameters}> {showParameters ? 'Hide' : 'Show'} search parameters </button>
	{#if showParameters}
		<header transition:fly={{x: -200, duration: 500}}>
			{#each Object.entries(parameters) as [parameter, _]}
			<Input bind:value={parameters[parameter]}> {parameter.charAt(0).toUpperCase() + parameter.slice(1)} </Input>
			{/each}
		</header>
	{/if}

	<section>
		{#each sorted(parameters) as photo (photo.src)}
			<li animate:flip={{duration: 500}}>
				<Photo src={photo.src} alt={photo.alt} parameters={photo.parameters}/>
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
		width: min(600px, 90vw);
		margin-top: 1em;
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

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	

	@media (max-aspect-ratio: 1/1) {
		li {
			height: 30vh;
		}
	}
</style>