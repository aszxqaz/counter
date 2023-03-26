import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePluginFonts } from "vite-plugin-fonts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Gotham Pro",
            // local: "Gotham Pro",
            src: "./src/assets/fonts/gothampro.ttf",
  
          },
        ],
      },
    }),
  ],
})
