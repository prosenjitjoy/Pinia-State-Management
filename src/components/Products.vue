<script setup lang="ts">
import { useProductStore } from '../store'
const store = useProductStore()
</script>

<template>
  <h2 class="text-2xl font-semibold my-2">Products</h2>
  <table class="w-full  border border-gray-500">
    <thead>
      <tr>
        <th class="p-1 text-left">Name</th>
        <th class="p-1 text-left">Price</th>
        <th class="p-1 text-left">&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in store.products" :key="index">
        <td class="border border-gray-500 p-1">{{ product.name }}</td>
        <td class="border border-gray-500 p-1">{{ product.price }}</td>
        <td class="border border-gray-500 p-1">
          <button class="mr-2 px-4 py-1 rounded bg-gray-100 border border-gray-500 hover:bg-gray-200 active:bg-gray-100" @click="store.addToCart(product)">Add to Cart</button>
          <button class="px-4 py-1 rounded bg-gray-100 border border-gray-500 hover:bg-gray-200 active:bg-gray-100" @click="store.removeFromCart(product)">Remove from Cart</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>