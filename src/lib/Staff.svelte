<body>
	<h2> Get to know our staff! </h2>
	
	<menu>
		<button on:click={() => location.href = '/executive'}> Executive department </button>
		<button on:click={() => location.href = '/legal'}> Legal department </button>
		<button on:click={() => location.href = '/private-paparazzi'}> Private paparazzi department </button>
	</menu>
</body>

<style>
	body {
		background-color: var(--tertiary);
		/* color: var(--primary); */
		color: white;
		padding: 0.5em 2em;
		width: 100%;
		border-radius: 1em;
	}
	h2 {
		color: var(--primary);
	}
	button {
		color: var(--primary);
		/* background-color: var(--tertiary); */
		padding: 1em;
		font-size: 1em;
		/* background-color: var(--text-hsl, 20%); */
	}

	menu {
		padding: 0;
	}
</style>