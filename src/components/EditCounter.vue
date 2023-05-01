<script setup lang="ts">
import { useCounterStore } from '../store'
const store = useCounterStore()
</script>

<template>
  <h2>Edit Counter</h2>
  <input class="bg-gray-100 p-2 rounded" type="text" v-model="store.counter">
</template>