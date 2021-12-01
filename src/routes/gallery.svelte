<script>
	import Back from "$lib/Back.svelte";
import Gallery from "$lib/Gallery.svelte";

	// let split_photos = []
	// let size = 3
	// $: while (photos.length > 0)
	// 	split_photos.push(photos.splice(0, size));
</script>

<Back />
<h1> Gallery </h1>

<Gallery/>

<footer>
	(More photos are soon to be added)
</footer>

<style>
	footer {
		padding: 3em;
		opacity: 40%;
	}
</style>