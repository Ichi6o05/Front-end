import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Front-end/docs/Sprint3/', 
  plugins: [react()],
})
