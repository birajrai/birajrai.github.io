<template>
  <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-primary-100/50">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <NuxtLink 
          to="/" 
          class="font-display text-xl font-bold tracking-tight hover:text-accent-600 transition-colors duration-300"
        >
          Biraj Rai
        </NuxtLink>
        
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink 
            v-for="(link, index) in links" 
            :key="link.to"
            :to="link.to"
            class="relative px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-900 transition-colors duration-300 group"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
        </div>

        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-primary-600 hover:text-primary-900 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-primary-100">
          <div class="flex flex-col gap-1">
            <NuxtLink 
              v-for="link in links" 
              :key="link.to"
              :to="link.to"
              class="px-4 py-3 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-lg transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Works', to: '/works' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Contact', to: '/contact' }
]

watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
