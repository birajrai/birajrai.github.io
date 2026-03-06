<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-12 animate-fade-in-up">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary-900 mb-4">About Me</h1>
      <div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full"></div>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
      <div class="w-full lg:w-1/3 animate-slide-in-left">
        <div class="relative">
          <div class="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl overflow-hidden">
            <div class="w-full h-full flex items-center justify-center">
              <Icon name="lucide:user" size="80" class="text-primary-300" />
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-2xl -z-10 opacity-20"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-2xl -z-10"></div>
        </div>
      </div>
      
      <div class="w-full lg:w-2/3 animate-fade-in-up" style="animation-delay: 200ms;">
        <h2 class="text-2xl sm:text-3xl font-display font-semibold text-primary-900 mb-6">
          Software Developer
        </h2>
        <p class="text-primary-600 text-lg leading-relaxed mb-8">
          I am a passionate software developer specializing in <span class="font-mono text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Java</span>, 
          <span class="font-mono text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Laravel</span>, 
          <span class="font-mono text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Node.js</span>, and 
          <span class="font-mono text-accent-600 bg-accent-50 px-2 py-0.5 rounded">Spigot</span> plugin development. 
          Building scalable applications and creative solutions is what I do best. 
          I love turning ideas into reality through code.
        </p>

        <div class="mb-8">
          <h3 class="text-xl font-display font-semibold text-primary-900 mb-4">Skills & Technologies</h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="(skill, index) in skills" 
              :key="skill"
              class="px-5 py-2.5 bg-white border border-primary-200 rounded-full text-sm font-medium text-primary-700 hover:border-accent-500 hover:text-accent-600 hover:shadow-md transition-all duration-300 cursor-default animate-fade-in-up"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
            <Icon name="lucide:code-2" size="24" class="text-accent-500 mb-3" />
            <h4 class="font-semibold text-primary-900 mb-1">Clean Code</h4>
            <p class="text-sm text-primary-500">Writing maintainable, well-structured code</p>
          </div>
          <div class="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
            <Icon name="lucide:zap" size="24" class="text-accent-500 mb-3" />
            <h4 class="font-semibold text-primary-900 mb-1">Performance</h4>
            <p class="text-sm text-primary-500">Optimizing for speed and efficiency</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  'Java', 'Laravel', 'Node.js', 'Spigot', 
  'Vue.js', 'TypeScript', 'PostgreSQL', 'MongoDB',
  'REST APIs', 'Git', 'Docker', 'AWS'
]

</script>
