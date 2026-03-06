<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-4">My Works</h1>
    <p class="text-gray-600 mb-12">Projects I've worked on</p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a 
        v-for="project in projects" 
        :key="project.name"
        :href="project.link"
        target="_blank"
        class="block p-6 border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all"
      >
        <div class="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
          <span class="text-gray-400">Project Image</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
        <p class="text-gray-600 text-sm">{{ project.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'MineNepal',
    description: 'A Minecraft server project for Nepalese players.',
    link: '#'
  },
  {
    name: 'Mulyankan',
    description: 'An evaluation and assessment platform.',
    link: '#'
  },
  {
    name: 'Jhanjhane',
    description: 'A creative project with unique features.',
    link: '#'
  }
]

useSeoMeta({
  title: 'Works - Biraj Rai',
  description: 'Projects I\'ve worked on including MineNepal, Mulyankan, and Jhanjhane.'
})
</script>
