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
        <Icon :name="social.icon" :class="social.color" size="28" />
        <span class="font-medium">{{ social.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Email', icon: 'mdi:email', link: '#', color: 'text-gray-500 hover:text-red-500' },
  { name: 'Facebook', icon: 'mdi:facebook', link: '#', color: 'text-gray-500 hover:text-blue-600' },
  { name: 'GitHub', icon: 'mdi:github', link: '#', color: 'text-gray-500 hover:text-black' },
  { name: 'Instagram', icon: 'mdi:instagram', link: '#', color: 'text-gray-500 hover:text-pink-600' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', link: '#', color: 'text-gray-500 hover:text-blue-700' }
]

useSeoMeta({
  title: 'Contact - Biraj Rai',
  description: 'Get in touch with Biraj Rai'
})
</script>
