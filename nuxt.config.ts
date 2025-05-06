// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content','@pinia/nuxt'],
  alias:{
    // "@":resolve(__dirname,"/"),
    assets:"/<rootDir>/assets"
  },
  css: ["~/assets/main.scss", "~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr:false,
});
