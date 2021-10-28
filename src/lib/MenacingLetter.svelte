<script lang=ts>
	export let show = false;
</script>

{#if show}
	<button on:click={() => show = false}> Hide menacing letter </button>
{:else}
	<button on:click={() => show = true}> Show menacing letter </button>
{/if}

<main class:show>
	<h1> Menacing letter </h1>
	
	<p>
		<slot/>
	<hr>
	
	<p class=translate>	
		Translated from: 
	<br>
	<br>
	<p>
		<slot name=translation/>
	</p>
</main>

<style>
	@import "@fontsource/lora/400-italic.css";
	@import "@fontsource/lora/700-italic.css";

	h1 {
		margin-top: 0;
		font-weight: 700;
		font-style: italic;
	}
	main {
		color: white;
		font-family: Lora;
		color: var(--primary);
		background-color: var(--secondary);
		padding: 1em;
		border-radius: 1rem;
		margin-top: 1em;

		transition: all 0.5s ease;

		transform: translate(-20%);
		opacity: 0;
	}

	.show {
		transform: translate(0);
		opacity: 100%;
	}
	.translate {
		opacity: 69%;
	}
</style>