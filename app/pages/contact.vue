<template>
  <div class="max-w-2xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
    <p class="text-gray-600 mb-12">Feel free to reach out through social media</p>
    
    <div class="grid grid-cols-2 gap-4">
      <a 
        v-for="social in socials" 
        :key="social.name"
        :href="social.link"
        target="_blank"
        class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition-all"
      >
        <span class="text-2xl">{{ social.icon }}</span>
        <span class="font-medium">{{ social.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Email', icon: '📧', link: '#' },
  { name: 'Facebook', icon: '📘', link: '#' },
  { name: 'GitHub', icon: '🐙', link: '#' },
  { name: 'Instagram', icon: '📷', link: '#' },
  { name: 'LinkedIn', icon: '💼', link: '#' }
]

useSeoMeta({
  title: 'Contact - Biraj Rai',
  description: 'Get in touch with Biraj Rai'
})
</script>
