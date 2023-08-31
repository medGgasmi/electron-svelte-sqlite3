<script>
     import { onMount } from "svelte";
   	 import { fetchGrilleData } from './data.js';
	
    let GrilleDatas = [];
	
    onMount(async () => {
        GrilleDatas = await fetchGrilleData();
    });
	

</script>
<main>
	
	
		
	
	<table>
		<thead>
			<tr>
				<th>id</th>
				<th>Category</th>
			</tr>
		</thead>
		<tbody>
			{#each GrilleDatas as data}
				<tr>
					<td>{data.id}</td>

					<td>{data.Category}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	

</main>
<style>
	main{
		background-color: antiquewhite;
		width: 100%;
		height: 100vh;
	}
	tr{
		border: 1px solid black;
	}
</style>