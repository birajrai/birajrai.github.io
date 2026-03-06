<template>
  <footer class="px-6 py-8 border-t border-gray-100 mt-auto">
    <div class="flex justify-center gap-6 mb-4">
      <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank" :class="social.color">
        <Icon :name="social.icon" size="24" />
      </a>
    </div>
    <p class="text-center text-gray-400 text-sm">&copy; {{ new Date().getFullYear() }} Biraj Rai. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'GitHub', icon: 'mdi:github', link: '#', color: 'text-gray-400 hover:text-black' },
  { name: 'Instagram', icon: 'mdi:instagram', link: '#', color: 'text-gray-400 hover:text-pink-600' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', link: '#', color: 'text-gray-400 hover:text-blue-700' }
]
</script>
