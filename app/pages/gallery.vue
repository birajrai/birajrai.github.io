<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-4">Gallery</h1>
    <p class="text-gray-600 mb-12">Photos and visuals</p>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="i in 8" 
        :key="i"
        class="aspect-square bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <span class="text-gray-400">Photo {{ i }}</span>
      </div>
    </div>
    
    <p class="text-center text-gray-500 mt-8">Add your photos here</p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Gallery - Biraj Rai',
  description: 'Photo gallery'
})
</script>
