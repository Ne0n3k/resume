import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    globals: true,
  },
}

