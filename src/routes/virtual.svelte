<script lang="ts">
	import Maggie from '$lib/virtual/Maggie.svelte'
	import { Maggie as MaggieObject } from '$lib/virtual/maggie'

	let maggie = new MaggieObject('Test')
	
</script>

<h1> Virtual Maggie! </h1>
<p>
	Here you can play with your own version of Maggie.
</p>

<Maggie {maggie}/>