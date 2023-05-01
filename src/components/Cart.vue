<script setup lang="ts">
import { useProductStore } from '../store'
const store = useProductStore()
</script>

<template>
  <h2 class="text-2xl font-semibold my-2">Cart</h2>
  <table class="w-full">
    <thead>
      <tr class="border border-gray-500">
        <th class="p-1 text-left">Name</th>
        <th class="p-1 text-left">Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cart, index) in store.cart" :key="index">
        <td class="border border-gray-500 p-1">{{ cart.name }}</td>
        <td class="border border-gray-500 p-1">{{ cart.quantity }}</td>
      </tr>
    </tbody>
  </table>
</template>