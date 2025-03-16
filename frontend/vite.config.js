import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:5001"
      }
    }
  }
})


//above one used to set the prefix for /api . every time we calling /api it should add prefix this part http://localhost:5001