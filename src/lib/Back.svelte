<script>
	// import { mdiChevronLeft } from '@mdi/js'
</script>

<header>
	<button on:click={() => window.history.back()}> Back </button>
</header>

<style>
	header {
		position: sticky;
		top: 0.5rem;
		border-radius: 1em;
		height: 3em;
		width: min(600px, 90%);

		opacity: 80%;

		display: grid;
		z-index: 100;
	}
	button {
		background-color: var(--primary);
		font-size: 1rem;
	}
</style>