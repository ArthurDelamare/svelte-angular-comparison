## Child to parent

### Angular

Based on an event emitter system.

Child:

```typescript
export class ProductOutputComponent {
  @Output() newProductEvent = new EventEmitter<string>();

  addNewProduct(value: string) {
    this.newProductEvent.emit(value);
  }
}
```

```html
<label for="product-input">Add a product:</label>
<input type="text" id="product-input" #newProduct />
<button type="button" (click)="addNewproduct(newProduct.value)">
  Add to parent's list
</button>
```

Parent:

```typescript
export class AppComponent {
  products = ["product 1", "product 2", "product 3", "product 4"];

  addProduct(newProduct: string) {
    this.products.push(newProduct);
  }
}
```

```html
<app-product-output (newProductEvent)="addProduct($event)"></app-product-output>
<ul>
  <li *ngFor="let product of products">{{product}}</li>
</ul>
```

### Svelte

A svelte component can obtain value from a child simply by using a binding system. Events such as onClick can also be binded directly from the parent without specific declaration.

Child:

```javascript
<script>
	export let product = 'valueInChild'
</script>

<label for="product-input">Add a product:</label>
<input type="text" id="product-input" bind:value={product}/>
<button type="button" on:click>
  Add to parent's list
</button>
```

Parent:

<script>
	import Child from './child.svelte'
	
	$: products = ["product 1", "product 2", "product 3", "product 4"];
	let product
	
	const addProduct = () => {
		products = [...products, product]
  }
</script>

<Child on:click={addProduct} bind:product={product}/>

<ul>
	{#each products as product}
		<li>{product}</li>
	{/each}
</ul>
