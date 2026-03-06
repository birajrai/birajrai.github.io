<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-12 animate-fade-in-up">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Gallery</h1>
      <p class="text-primary-600 text-lg">Photos and visuals</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="(item, index) in galleryItems" 
        :key="index"
        class="group aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden relative cursor-pointer animate-fade-in-up"
        :style="{ animationDelay: `${index * 50}ms` }"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon :name="item.icon" size="32" class="text-primary-300 group-hover:text-accent-400 group-hover:scale-110 transition-all duration-300" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="absolute bottom-4 left-4">
            <p class="text-white font-medium text-sm">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center animate-fade-in" style="animation-delay: 400ms;">
      <p class="text-primary-400 text-sm">
        <Icon name="lucide:info" size="16" class="inline mr-2" />
        Add your photos to the gallery for a more personal touch
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const galleryItems = [
  { icon: 'lucide:camera', label: 'Photography' },
  { icon: 'lucide:code', label: 'Development' },
  { icon: 'lucide:palette', label: 'Design' },
  { icon: 'lucide:coffee', label: 'Workspace' },
  { icon: 'lucide:mountain', label: 'Travel' },
  { icon: 'lucide:music', label: 'Music' },
  { icon: 'lucide:gamepad-2', label: 'Gaming' },
  { icon: 'lucide:book-open', label: 'Learning' }
]

</script>
