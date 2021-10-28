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
		/* background-color: var(--secondary); */
		border-radius: 1em;
		height: 3em;
		width: 100%;

		opacity: 80%;

		display: grid;
		/* place-items: center; */
	}
	button {
		background-color: var(--primary);
		font-size: 1rem;
	}
</style>