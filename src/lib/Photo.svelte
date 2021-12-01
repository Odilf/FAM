<script lang='ts'>
	import { fade, fly } from 'svelte/transition'
	import { Parameters } from '$lib/photos'
	
	export let src: string
	export let alt: string
	export let parameters: Parameters = new Parameters()

	export let hoverable = true

	let hovering = false
	let shiftPressed = false

	$: active = hoverable && hovering && shiftPressed

	function handleKeydown(e) {
		if (e.key === 'Shift') shiftPressed = true
	}

	function handleKeyup(e) {
		if (e.key === 'Shift') shiftPressed = false
	}

	let showFullscreen = false

	function maximize() {
		showFullscreen = true
	}

</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup}/>

{#if showFullscreen}
	<figure on:click={() => showFullscreen = false} transition:fade={{duration: 200}}>
		<div class="fullscreen" transition:fly={{y: 200, duration: 400}}>
			<img {src} {alt} class='fullscreen-photo'/>
		</div>
	</figure>
{/if}

<div class="container" on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false} on:click={maximize}>
	<info class:active>
		<h1>
			{alt}
		</h1>
		<p>
			Score calculated based on: 
		<ul>
			<li> Coziness: {parameters.cozy.toFixed(3)}</li>
			<li> Cuteness: {parameters.cute.toFixed(3)}</li>
			<li> Laziness: {parameters.lazy.toFixed(3)}</li>
			<li> Royaltiness: {parameters.royalty.toFixed(3)}</li>
			<li> Swagness: {parameters.swag.toFixed(3)}</li>
		</ul>
	</info>
	<img {src} {alt} class='flow-photo'/>
</div>

<style>
	figure {
		position: fixed;
		inset: 0 0 0 0;
		background-color: hsla(var(--tertiary-hsl), 50%);
		margin: 0;

		z-index: 10;
		display: grid;
		place-items: center;
	}

	.fullscreen {
		width: min(600px, 90vw);
	}

	info {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;

		padding: 1em;
		box-sizing: border-box;

		color: var(--primary);

		transition: all 0.2s;
	}

	.active {
		opacity: 1;
		background-color: hsla(var(--tertiary-hsl), 50%);
	}

	.container {
		position: relative;

		height: 100%;
		width: 100%;
		object-fit: cover;
		vertical-align: middle;

		border: 5px solid;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27),
                      0 0 40px  rgba(0, 0, 0, 0.06) inset;

		transition: all 0.3s;
	}

	.container:hover {
		transform: scale(100.5%);
		box-shadow: 0 2px 8px hsla(var(--secondary-hsl), 100%);
	}

	.flow-photo {
		max-height: 100%;
		min-width: 100%;
		object-fit: cover;
	}

	.fullscreen-photo { 
		object-fit: contain;
		width: 100%;
		height: 100%;
		border: 5px solid;
	}
</style>