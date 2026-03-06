<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-12 animate-fade-in-up">
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary-900 mb-4">Get In Touch</h1>
      <p class="text-primary-600 text-lg">Feel free to reach out through social media</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-4">
      <a 
        v-for="(social, index) in socials" 
        :key="social.name"
        :href="social.link"
        target="_blank"
        class="group flex items-center gap-4 p-5 bg-white border border-primary-200 rounded-2xl hover:border-accent-400 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div :class="`w-12 h-12 flex items-center justify-center rounded-xl bg-${social.bgColor} text-white group-hover:scale-110 transition-transform`">
          <Icon :name="social.icon" size="24" />
        </div>
        <div>
          <p class="font-semibold text-primary-900">{{ social.name }}</p>
          <p class="text-sm text-primary-500">{{ social.handle }}</p>
        </div>
        <Icon name="lucide:arrow-right" size="18" class="ml-auto text-primary-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all" />
      </a>
    </div>

    <div class="mt-12 p-8 bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-3xl border border-primary-100 animate-fade-in-up" style="animation-delay: 500ms;">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-accent-500 text-white rounded-2xl flex items-center justify-center">
          <Icon name="lucide:message-circle" size="32" />
        </div>
        <h3 class="text-xl font-display font-semibold text-primary-900 mb-2">Let's Work Together</h3>
        <p class="text-primary-600 mb-6 max-w-md mx-auto">
          Have a project in mind or just want to chat? I'm always happy to connect with new people.
        </p>
        <a 
          href="mailto:contact@birajrai.com.np"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-xl font-medium hover:bg-accent-600 transition-colors"
        >
          <Icon name="lucide:mail" size="18" />
          Send an Email
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Email', icon: 'lucide:mail', link: 'mailto:contact@birajrai.com.np', handle: 'contact@birajrai.com.np', bgColor: 'bg-red-500' },
  { name: 'Facebook', icon: 'lucide:facebook', link: 'https://facebook.com', handle: '@birajrai', bgColor: 'bg-blue-600' },
  { name: 'GitHub', icon: 'lucide:github', link: 'https://github.com', handle: '@birajrai', bgColor: 'bg-primary-800' },
  { name: 'Instagram', icon: 'lucide:instagram', link: 'https://instagram.com', handle: '@birajrai', bgColor: 'bg-pink-500' },
  { name: 'LinkedIn', icon: 'lucide:linkedin', link: 'https://linkedin.com', handle: 'in/birajrai', bgColor: 'bg-blue-700' }
]

</script>
