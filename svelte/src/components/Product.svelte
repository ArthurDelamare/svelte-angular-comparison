<script>
    import {products} from "../products-store"

    let selected;
</script>

<form>
    <label for="products">Select a product</label>
    <select value={selected} id="products">
        {#each $products as product}
			<option value={product}>
				{product.name}
			</option>
		{/each}
    </select>
</form>