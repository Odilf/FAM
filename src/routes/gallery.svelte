<script>
	import Back from "$lib/Back.svelte";
</script>

<Back/>
<h1> Gallery </h1>

<main>
	<img src="maggie_material/cool.png" alt='cool'/>
	<img src="maggie_material/serene.png" alt='serene'/>
</main>

<style>
	main {
		width: 100%;
		/* overflow: hidden; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	img {
		width: 100%;
	}
</style>