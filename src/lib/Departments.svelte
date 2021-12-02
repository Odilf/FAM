<body>
	<h2> Departments </h2>
	
	<menu>
		<button on:click={() => location.href = '/departments/legal'}> Legal department </button>
		<button on:click={() => location.href = '/departments/executive'}> Executive department </button>
		<button on:click={() => location.href = '/departments/private-paparazzi'}> Private paparazzi department </button>
	</menu>
</body>

<style>
	body {
		width: 100%;
		background-color: var(--tertiary);

		padding: 0.5em 2em;
		margin: 1em;
		border-radius: 1em;

		box-sizing: border-box;
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