// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
})
