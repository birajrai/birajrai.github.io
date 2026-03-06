<template>
  <nav class="flex justify-between items-center px-6 py-4 border-b border-gray-100">
    <NuxtLink to="/" class="text-xl font-bold hover:text-gray-600 transition-colors">Biraj Rai</NuxtLink>
    <div class="flex gap-6">
      <NuxtLink 
        v-for="link in links" 
        :key="link.to"
        :to="link.to" 
        class="text-gray-600 hover:text-black transition-colors"
        active-class="text-black font-medium"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Works', to: '/works' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact', to: '/contact' }
]
</script>
