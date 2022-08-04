import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: false,
  },

  css: ["~/assets/css/style.styl"],

  build: {
    transpile: ["@headlessui/vue"],
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#head
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full bg-gray-100",
      },
      bodyAttrs: {
        class: "h-full",
      },
      link: [{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
    },
  },
});
