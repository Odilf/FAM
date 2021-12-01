<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot/>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		box-sizing: border-box;
		width: 100vw;
		padding: min(4em, 5vw);
		background-color: var(--primary);
	}
</style>