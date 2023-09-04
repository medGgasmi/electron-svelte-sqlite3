<script>
     import { onMount } from "svelte";
	 import { fetchGrilleData, updateGrilleData, insertGrilleData, deleteGrilleData  } from './data.js';
	
    let GrilleDatas = [];
	let newCategory = "";
	let UpdatedCategory = "";
	let idToUpdate = "";
    onMount(async () => {
        GrilleDatas = await fetchGrilleData();
	
		// console.log(GrilleDatas[0].id)
    });

// 	$: {
//     console.log(GrilleDatas); // This will log the value of GrilleDatas whenever it changes
// }
	async function updateCategory() {
        await updateGrilleData(idToUpdate, UpdatedCategory);
        GrilleDatas = await fetchGrilleData(); // Refresh data after update
    }
	async function addCategory() {
        await insertGrilleData(newCategory);
        GrilleDatas = await fetchGrilleData(); // Refresh data after insertion
        newCategory = ""; // Clear the input field
    }

	async function deleteCategory(id) {
        await deleteGrilleData(id);
        GrilleDatas = await fetchGrilleData(); // Refresh data after deletion
		
    }
</script>
<main>
	
	
	<p>Total Categories: {GrilleDatas.length}</p>
	
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
					<td><button on:click={() => deleteCategory(data.id)}>Delete</button></td>

				</tr>
			{/each}
		</tbody>
	</table>
	<div>
		<input type="number" bind:value={idToUpdate} placeholder="Enter ID to update" />
        <input bind:value={UpdatedCategory} placeholder="Enter new category" />
        <button on:click={updateCategory}>Update Category</button>
    </div>
	<div>
        <input bind:value={newCategory} placeholder="Enter new category" />
        <button on:click={addCategory}>Add Category</button>
    </div>
</main>
<style>
	main{
		background-color: hwb(34 84% 2%);
		width: 100%;
		height: 100vh;
	}
	tr{
		border: 1px solid black;
	}
</style>