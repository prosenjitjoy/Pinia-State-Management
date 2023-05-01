<script setup lang="ts">
import { computed } from 'vue'
import { useColorStore } from '../store'
const store = useColorStore()
const previewRGB = computed(() => {
  return {
    backgroundColor: store.hex
  }
})
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold">Preview Color</h2>
    <div class="w-48 h-48" :style="previewRGB"></div>
    <p>CSS color string: {{ previewRGB.backgroundColor }}</p>
  </div>
</template>