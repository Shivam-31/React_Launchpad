import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ✅ Correct package

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),           // ✅ React plugin pehle
    tailwindcss(),     // ✅ Tailwind plugin alag se
  ],
})