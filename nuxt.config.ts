// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    cssPath: "~/assets/css/style.css",
    config: {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "faster-pink": "#F24B78",
            "faster-blue": "#030140",
            "faster-light-blue": "#F3F9FE",
            "faster-light-pink": "#FFE2EA",
          },
        },
      },
    },
  },
});
