<script setup lang="ts">
import { useProductStore } from '../store'
const store = useProductStore()
const checkout = () => {
  alert("Checkout process!")
}
</script>

<template>
  <h2 class="text-2xl font-semibold my-2">Checkout</h2>
  <div class="flex gap-4 items-center">
    <p>Your total is ${{ store.cartTotal }}</p>
    <button class="px-4 py-1 rounded bg-gray-100 border border-gray-500 hover:bg-gray-200 active:bg-gray-100" @click="checkout" v-show="store.cartTotal">Checkout</button>
  </div>
</template>