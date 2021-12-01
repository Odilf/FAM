<script lang='ts'>
import { bind } from "svelte/internal"

	export let value = 50

	export let delay = 50

	let htmlValue = value
	let timeout
	function handleChange(e) {
		clearTimeout(timeout)
		timeout = setTimeout(() => value = htmlValue, delay)
	}
	
</script>

<main>
	<slot/>
	{#if delay}
		<input type='range' bind:value={htmlValue} on:input={handleChange}/>
	{:else}
		<input type='range' bind:value>
	{/if}
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		/* width: 100% */
	}
	input {
		margin-left: 2em;
		width: 100%;

		cursor: pointer;
		color: red;
	}

	input::range-track {
		background-color: aqua;
	}
</style>