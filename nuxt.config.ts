// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  base: '/',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts'
  ],

  site: {
    url: 'https://birajrai.github.io'
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})