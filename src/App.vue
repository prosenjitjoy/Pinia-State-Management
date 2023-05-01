<script setup lang="ts">
import EditCounter from './components/EditCounter.vue';
import { useCounterStore } from './store'
const store = useCounterStore()

import RGBedit from './components/RGBedit.vue'
import PreviewColor from './components/PreviewColor.vue'
import Products from './components/Products.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';
</script>

<template>
  <div class="container mx-auto">
    <div class="border border-gray-500 p-2 mt-4">
      <p>Counter: {{ store.counter }}</p>
      <p>Double: {{ store.doubleCount }}</p>
      <EditCounter />
    </div>

    <div class="border border-gray-500 p-2 my-4">
      <h1 class="text-2xl font-semibold">Color Edition</h1>
      <p class="my-4">Use the sliders below to set the red, green, and blue values for a color.</p>
      <div class="grid grid-cols-2 gap-3">
        <RGBedit />
        <PreviewColor />
      </div>
    </div>

    <div class="border border-gray-500 p-2">
      <Products />
    </div>

    <div class="border border-gray-500 p-2 my-4">
      <Cart />
    </div>

    <div class="border border-gray-500 p-2 mb-4">
      <Checkout />
    </div>
  </div>
</template>
