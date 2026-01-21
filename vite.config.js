import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Based on your screenshot, your URL uses Capital Letters. 
  // This line MUST match that exactly.
  base: '/Adfirm-Media/',
})
