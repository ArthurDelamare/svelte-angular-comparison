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
