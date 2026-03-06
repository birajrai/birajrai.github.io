<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-1/4 -left-32 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-3xl text-center relative z-10">
      <p class="text-accent-600 font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">
        Hello, I'm
      </p>
      
      <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-900 via-primary-700 to-accent-600 bg-clip-text text-transparent animate-fade-in-up" style="animation-delay: 100ms;">
        Biraj Rai
      </h1>
      
      <p class="text-lg sm:text-xl text-primary-600 mb-8 leading-relaxed animate-fade-in-up" style="animation-delay: 200ms;">
        Software Developer specializing in <span class="font-mono text-accent-600">Java</span>, <span class="font-mono text-accent-600">Laravel</span>, <span class="font-mono text-accent-600">Node.js</span>, and <span class="font-mono text-accent-600">Spigot</span> plugin development.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 300ms;">
        <NuxtLink 
          to="/works" 
          class="group px-8 py-4 bg-primary-900 text-white rounded-xl font-medium hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25 hover:-translate-y-1"
        >
          <span class="flex items-center justify-center gap-2">
            View My Work
            <Icon name="lucide:arrow-right" size="18" class="group-hover:translate-x-1 transition-transform" />
          </span>
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="px-8 py-4 border-2 border-primary-200 text-primary-700 rounded-xl font-medium hover:border-accent-500 hover:text-accent-600 transition-all duration-300 hover:-translate-y-1"
        >
          About Me
        </NuxtLink>
      </div>

      <div class="mt-16 flex justify-center gap-8 animate-fade-in" style="animation-delay: 500ms;">
        <div class="text-center">
          <p class="font-display text-3xl font-bold text-primary-900">5+</p>
          <p class="text-sm text-primary-500">Years Experience</p>
        </div>
        <div class="w-px bg-primary-200"></div>
        <div class="text-center">
          <p class="font-display text-3xl font-bold text-primary-900">20+</p>
          <p class="text-sm text-primary-500">Projects</p>
        </div>
        <div class="w-px bg-primary-200"></div>
        <div class="text-center">
          <p class="font-display text-3xl font-bold text-primary-900">10+</p>
          <p class="text-sm text-primary-500">Clients</p>
        </div>
      </div>
    </div>
  </div>
</template>

