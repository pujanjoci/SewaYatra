import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/SewaYatra/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
  },
})
