<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8">About Me</h1>
    
    <div class="flex flex-col md:flex-row gap-12 items-start">
      <div class="w-full md:w-1/3">
        <div class="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
          <span class="text-gray-400">Profile Photo</span>
        </div>
      </div>
      
      <div class="w-full md:w-2/3">
        <h2 class="text-2xl font-semibold mb-4">Software Developer</h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          I am a software developer specializing in Java, Laravel, Node.js, and Spigot plugin development. 
          Building scalable applications and creative solutions is what I do best. 
          I love turning ideas into reality through code.
        </p>
        
        <h3 class="text-xl font-semibold mb-4">Skills</h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="skill in skills" 
            :key="skill"
            class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = ['Java', 'Laravel', 'Node.js', 'Spigot']

useSeoMeta({
  title: 'About - Biraj Rai',
  description: 'Software developer specializing in Java, Laravel, Node.js, and Spigot plugin development.'
})
</script>
