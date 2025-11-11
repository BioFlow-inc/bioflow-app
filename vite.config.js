import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Set base to repository name for GitHub Pages
  // Change 'bioflow' to your actual repository name
  base: process.env.GITHUB_ACTIONS ? '/bioflow-app/' : '/',
})