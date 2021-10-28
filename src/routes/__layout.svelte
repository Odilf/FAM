<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot></slot>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		box-sizing: border-box;
		width: 100vw;
		padding: min(5em, 10vw);
		background-color: var(--primary);
	}
</style>