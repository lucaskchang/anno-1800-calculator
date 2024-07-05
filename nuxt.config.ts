// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Anno 1800 Calculator',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['@/assets/css/styles.scss'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Ubuntu: true,
    },
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
