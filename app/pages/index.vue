<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
    <div class="max-w-2xl">
      <p class="text-sm text-gray-500 mb-4">Hello, I'm</p>
      <h1 class="text-5xl md:text-7xl font-bold mb-6">Biraj Rai</h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-8">
        Software Developer specializing in Java, Laravel, Node.js, and Spigot plugin development.
      </p>
      <div class="flex gap-4 justify-center">
        <NuxtLink 
          to="/works" 
          class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          View My Work
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          About Me
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Biraj Rai - Software Developer',
  description: 'Software developer specializing in Java, Laravel, Node.js, and Spigot plugin development.'
})
</script>
