<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-8 animate-fade-in-up">
      <NuxtLink to="/works" class="inline-flex items-center gap-2 text-primary-500 hover:text-accent-600 transition-colors mb-4">
        <Icon name="lucide:arrow-left" size="18" />
        Back to Works
      </NuxtLink>
    </div>

    <article class="animate-fade-in-up" style="animation-delay: 100ms;">
      <div class="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl mb-8 overflow-hidden relative">
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon name="lucide:folder-open" size="64" class="text-primary-300" />
        </div>
      </div>

      <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary-900 mb-4">
        Project Name
      </h1>

      <div class="flex flex-wrap gap-3 mb-6">
        <span class="px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
          Java
        </span>
        <span class="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
          Node.js
        </span>
      </div>

      <p class="text-primary-600 text-lg leading-relaxed mb-8">
        This is a detailed description of the project. It showcases the problem solved, 
        technologies used, and the impact of the project.
      </p>

      <div class="grid sm:grid-cols-2 gap-6 mb-8">
        <div class="p-6 bg-white border border-primary-100 rounded-2xl">
          <h3 class="font-semibold text-primary-900 mb-3 flex items-center gap-2">
            <Icon name="lucide:target" size="20" class="text-accent-500" />
            Project Goal
          </h3>
          <p class="text-primary-600 text-sm">
            Describe the main objective and what the project aimed to achieve.
          </p>
        </div>
        <div class="p-6 bg-white border border-primary-100 rounded-2xl">
          <h3 class="font-semibold text-primary-900 mb-3 flex items-center gap-2">
            <Icon name="lucide:check-circle" size="20" class="text-accent-500" />
            Results
          </h3>
          <p class="text-primary-600 text-sm">
            Highlight the outcomes and impact of the completed project.
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <a 
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-xl font-medium hover:bg-accent-600 transition-colors"
        >
          <Icon name="lucide:external-link" size="18" />
          Live Demo
        </a>
        <a 
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-200 text-primary-700 rounded-xl font-medium hover:border-accent-500 hover:text-accent-600 transition-colors"
        >
          <Icon name="lucide:github" size="18" />
          Source Code
        </a>
      </div>
    </article>
  </div>
</template>

