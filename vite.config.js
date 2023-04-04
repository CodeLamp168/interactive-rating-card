import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  base: "interactive-rating-card",
  plugins: [react()],
}
