<script>
    import { onMount } from "svelte";
	
    let categories = [];
	
    onMount(async () => {
		const { ipcRenderer } = require('electron');
        categories = await ipcRenderer.invoke('fetch-categories');


    });


	////new 
	let newCategoryName = "";

</script>
<main>
	<input type="text" bind:value={newCategoryName} placeholder="New Category" />
	<ul>
		hi how are you
		{#each categories as category}
			<li>{category.Category}</li>
		{/each}
	</ul>

</main>
<style>
	main{
		background-color: antiquewhite;
		width: 100%;
		height: 100vh;
	}
</style>