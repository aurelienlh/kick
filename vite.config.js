import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/build/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
  },

  define: {
    global: "globalThis",
    "process.env": {},
  },
});