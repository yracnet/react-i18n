import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig([
  {
    build: {
      lib: {
        entry: './src/main.jsx',
      },
      rollupOptions: {
        external: ['react'],
        output: {
          globals: {
            react: 'React',
          },
        },
      },
    },
    plugins: [react()],
  },
  {
    build: {
      entry: './src/dev.js',
    },
    plugins: [],
  }
])
