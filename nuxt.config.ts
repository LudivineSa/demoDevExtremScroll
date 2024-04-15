// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true},
  ssr: false,
  css: [
    // "primevue/resources/primevue.css",
    "~/assets/dx.fluent.artist-theme.css",
    "~/assets/dx.fluent.artist-datatable.css"],
})
