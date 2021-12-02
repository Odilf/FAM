<script lang="ts">
	import Card from "./Card.svelte";
	import { staff } from '$lib/photos'
</script>

<section>
	<Card color='#3333FF' photo={staff.clara}>
		<span slot='heading'>
			Clara
		</span>
		<p>
			Clara is considered the mother of Maggie. Tactical repositioning of the headquarters have made that Clara can always be in extremely near proximity to Maggie, since day-long care is essential to her wellbeing.
		</p>
		<p>
			Furthermore, being the head of the <a href='private-paparazzi'> private paparazzi </a> department, Clara is an expert at loving Maggie. She's a loyal devotee that has deep knoledge about how Maggie is best portrayed in print.
		</p>
	</Card>
	
	<Card color='#32BC00' photo={staff.javi}>
		<span slot='heading'>
			Javi
		</span>
		<p>
			Javi is the father and owner of Maggie. He has the duty of feeding her, and cleaning up her vomit. 
		</p>
		<p>
			Is there something a man can do? Then Javi does. That's almost his motto. From unicycling to doing backflips in the air, the range of abilities to Javi can often be breathtaking.  
		</p>
	</Card>
	
	<Card color='#D62F09' photo={staff.ody}>
		<span slot='heading'>
			Ody
		</span>
		<p>
			Ody is in charge of all things technical related to the conservation and elevation of the image of Maggie.
		</p>
		<p>
			Ody operates the <a href='/executive'> executive department </a> as Odilf, and the <a href="/legal"> legal department </a> as OdilfGamer, the most menacing version of Odilf. 
		</p>
	</Card>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: 100%;
	}
	a {
		color: var(--primary);
		text-decoration: underline;
		transition: all 0.2s;
	}
	a:hover {
		text-shadow: 1px 1px 1px black;
	}
</style>