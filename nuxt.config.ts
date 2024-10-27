// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    extractCSS: true,
    optimizeCSS: true,
  },
  components : [
    { path: '~/components', pathPrefix: false },
  ],
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Fredoka': [400, 500, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: 'Project A1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  ssr: true,
})