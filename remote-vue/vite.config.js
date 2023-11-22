import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

const port = 5001;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port,
  },
  preview: {
    port,
  },
  plugins: [
    vue(),
    federation({
      name: "remote-vue",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Counter": "./src/components/Counter.vue",
        "./render": "./src/render",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
