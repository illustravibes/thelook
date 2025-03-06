import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  server: {
    port: 4444,
  },
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      $services: '/src/services',
      $components: '/src/components',
      $stores: '/src/stores',
      $utils: '/src/utils',
    },
  },
})
