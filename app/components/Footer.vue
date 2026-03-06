<template>
  <footer class="px-6 py-12 mt-auto bg-primary-900 text-white">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left">
          <h3 class="font-display text-2xl font-bold mb-2">Biraj Rai</h3>
          <p class="text-primary-300 text-sm max-w-xs">
            Software developer crafting scalable applications and creative solutions.
          </p>
        </div>
        
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-4">
            <a 
              v-for="social in socials" 
              :key="social.name" 
              :href="social.link" 
              target="_blank"
              :aria-label="social.name"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-primary-800 text-primary-300 hover:bg-accent-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Icon :name="social.icon" size="20" />
            </a>
          </div>
          <p class="text-primary-400 text-sm">&copy; {{ new Date().getFullYear() }} Biraj Rai. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'GitHub', icon: 'mdi:github', link: 'https://github.com' },
  { name: 'Instagram', icon: 'mdi:instagram', link: 'https://instagram.com' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', link: 'https://linkedin.com' }
]
</script>
