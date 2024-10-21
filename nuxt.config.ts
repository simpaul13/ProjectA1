// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
  },
})