import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import parser from 'vite-plugin-tools'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  static:{
    directory:'public',
    serveDirectory: true
  },
  plugins: [react(), parser()],
})

