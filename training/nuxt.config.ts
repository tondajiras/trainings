// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  css: ["assets/style/main.css"],
  app: {
    head: {
      title: "Trainigs",
    },
  },
});
