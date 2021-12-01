<script>
	export let value = 50
</script>

<slot/>
{value}
<input type='range' bind:value>