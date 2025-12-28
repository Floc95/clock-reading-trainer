import { tr } from "@nuxt/ui/runtime/locale/index.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-gtag'],
  gtag: {
    id: 'G-S5VRNDKMJQ'
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      title: 'Tic Tac Clock',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/favicon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: ""
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Chewy&family=Capriola&display=swap'
        }
      ],
      meta: [
        {
          name: 'msapplication-TileImage',
          content: '/favicon.png'
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'theme-color',
          content: '#ec675b'
        }
      ]
    }
  }
})