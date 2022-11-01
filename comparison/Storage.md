## Storage

### Angular

For Angular, a service system with an injection pattern:

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [
    {
      name: "Mug",
      price: 8,
    },
    {
      name: "Coffee",
      price: 0.5,
    },
    {
      name: "Chocolate bar",
      price: 3.9,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  add(product: Product) {
    this.products.push(product);
  }

  clear() {
    this.products = [];
  }
}
```

```typescript
export class AnyComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .filter((product) => {
        // do something here
      })
      .map((product) => {
        // and here
      });
  }
}
```

### Svelte

On svelte side : a store system allowing to subscribe, display and update.

Store implementation:

```javascript
import { writable } from "svelte/store";

export const products = writable([
  {
    name: "Mug",
    price: 8,
  },
  {
    name: "Coffee",
    price: 0.5,
  },
  {
    name: "Chocolate bar",
    price: 3.9,
  },
]);
```

Store usage:

```javascript
<script>
    import {products} from "products-store"

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
```
