import { tr } from "@nuxt/ui/runtime/locale/index.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-gtag'],
  gtag: {
    id: 'GTM-MWBM7N7G'
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
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
        }
      ]
    }
  }
})