<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-12 animate-fade-in-up">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary-900 mb-4">My Works</h1>
      <p class="text-primary-600 text-lg">Projects I've worked on</p>
    </div>
    
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <a 
        v-for="(project, index) in projects" 
        :key="project.name"
        :href="project.link"
        target="_blank"
        class="group block bg-white rounded-2xl overflow-hidden border border-primary-100 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div class="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon :name="project.icon || 'lucide:folder'" size="48" class="text-primary-300 group-hover:text-accent-400 transition-colors" />
          </div>
          <div class="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-semibold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-primary-500 text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
          <div class="flex items-center gap-2 text-accent-500 text-sm font-medium">
            <span>View Project</span>
            <Icon name="lucide:arrow-up-right" size="16" />
          </div>
        </div>
      </a>
    </div>

    <div class="mt-16 p-8 bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl text-center animate-fade-in-up" style="animation-delay: 400ms;">
      <h2 class="text-2xl font-display font-bold text-white mb-4">Have a project in mind?</h2>
      <p class="text-primary-200 mb-6 max-w-lg mx-auto">
        I'm always open to discussing new projects and creative ideas. Let's build something amazing together.
      </p>
      <NuxtLink 
        to="/contact"
        class="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 rounded-xl font-medium hover:bg-accent-50 transition-colors"
      >
        Get In Touch
        <Icon name="lucide:arrow-right" size="18" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'MineNepal',
    description: 'A Minecraft server project for Nepalese players, featuring custom plugins and an engaging community experience.',
    link: '#',
    icon: 'game-icons:dragon-breath'
  },
  {
    name: 'Mulyankan',
    description: 'An evaluation and assessment platform built with modern web technologies for streamlined workflows.',
    link: '#',
    icon: 'lucide:clipboard-check'
  },
  {
    name: 'Jhanjhane',
    description: 'A creative project with unique features, showcasing innovative design and development skills.',
    link: '#',
    icon: 'lucide:sparkles'
  }
]

</script>
