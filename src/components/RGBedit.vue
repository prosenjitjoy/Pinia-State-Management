<script setup lang="ts">
import { useColorStore } from '../store'
const store = useColorStore()
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold">Edit RGB</h2>
    <div class="flex flex-col justify-center ">
      <div class="flex justify-between w-1/2">
        <label for="red">Red</label>
        <input type="range" min="0" max="255" id="red" v-model="store.red">
      </div>
      <br />
      <div class="flex justify-between w-1/2">
        <label for="green">Green</label>
        <input type="range" min="0" max="255" id="green" v-model="store.green">
      </div>
      <br />
      <div class="flex justify-between w-1/2">
        <label for="blue">Blue</label>
        <input type="range" min="0" max="255" id="blue" v-model="store.blue">
      </div>
    </div>
    <br />
  </div>
</template>