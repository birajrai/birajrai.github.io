// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],

  googleFonts: {
    families: {
      'playfair-display': [400, 500, 600, 700],
      'inter': [300, 400, 500, 600, 700],
      'jetbrains-mono': [400, 500]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    download: true,
    inject: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Biraj Rai - Software Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software developer specializing in Java, Laravel, Node.js, and Spigot plugin development.' },
        { name: 'theme-color', content: '#0f172a' },
        { name: 'format-detection', content: 'telephone=no' },

        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://birajrai.com.np/' },
        { property: 'og:title', content: 'Biraj Rai - Software Developer' },
        { property: 'og:description', content: 'Software developer specializing in Java, Laravel, Node.js, and Spigot plugin development.' },
        { property: 'og:site_name', content: 'Biraj Rai' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://birajrai.com.np/' },
        { name: 'twitter:title', content: 'Biraj Rai - Software Developer' },
        { name: 'twitter:description', content: 'Software developer specializing in Java, Laravel, Node.js, and Spigot plugin development.' },

        { name: 'author', content: 'Biraj Rai' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://birajrai.com.np/' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true
  }
})
