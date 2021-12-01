<script>
	import Departments from "$lib/Departments.svelte";
import Staff from "$lib/Staff.svelte";
</script>

<!-- I don't know why i have to put a body here -->
<body/>

<h1>Maggie!</h1>

<h2> Maggie Fan and Worship Club</h2>

from


<h3> Club de Fans y Adoradores de Maggie </h3>

<img src="maggie!.svg" alt='maggie!' />

<button class=big-button on:click={() => location.href = '/gallery'}> Gallery </button>

<Staff/>

<Departments/>

<!-- <Webcam/> -->

<style>
	
	h1 {
		font-family: "Acme";
		font-size: min(10rem, 25vw);
		margin: 1rem;
		letter-spacing: 0em;
		transition: letter-spacing 0.5s ease-in-out;
		cursor: pointer;
	}
	h1:hover {
		letter-spacing: 0.01em;
	}
	button {
		font-size: 1.2rem;
		width: 100%;
		padding: 0.5em;
	}

	h3 {
		color: hsla(var(--text-hsl), 69%);
	}

	body {
		background-color: none;
	}

	.big-button {
		font-size: 4em;
		height: 3em;
		width: 80vw;
		margin: 1em;
	}
</style>