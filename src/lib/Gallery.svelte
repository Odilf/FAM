<script>
	export let photos

	import Slider from "./Slider.svelte";
</script>

<main>
	<section>
		<!-- <Slider> Cute </Slider> -->
	</section>

	<section>
		{#each photos as photo}
		<li>
			{photo.score([1, 1, 1, 1])}
			<img src={photo.url} alt={photo.alt} />
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
	img {
		max-height: 100%;
		min-width: 100%;
		object-fit: cover;
		vertical-align: bottom;

		border: 5px solid;
	}

	@media (max-aspect-ratio: 1/1) {
		li {
			height: 20vh;
		}
	}
</style>