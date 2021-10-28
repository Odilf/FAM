<script lang=ts>
	import Loader from "./Loader.svelte";
	import { fade } from 'svelte/transition'

	let videoSource;
	let loading = false;

	const getCamera = async () => {
		try {

			loading = true;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
			});
			
			videoSource.srcObject = stream;
			videoSource.play();
			loading = false;
			
		} catch (error) {
			console.log(error);
		}
	};

	function disableCamera() {
		// videoSource.getTracks().forEach(function(track) {
		// 	track.stop();
		// });
		// playing = false
		console.log(videoSource.srcObject.getTracks()[0])
		
		// videoSource.srcObject.getTracks().forEach(element => { element.stop() });
		videoSource.srcObject = null;
		// console.warn("not working");
	}
</script>

<main>
	{#if loading}
		<Loader/>
	{/if}

	{#if videoSource && videoSource.srcObject}
		<button on:click={disableCamera}> Disable camera </button>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video transition:fade bind:this={videoSource} />
	{:else}
		<button on:click={getCamera}>Activate webcam</button>
	{/if}

</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>