import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, statSync } from 'node:fs'

// Public files stay at stable URLs. Missing files never become broken links.
function publicAsset(path) {
  const file = new URL(`./public/${path}`, import.meta.url)
  return existsSync(file) && statSync(file).isFile() && statSync(file).size > 0
    ? `/${path}`
    : null
}

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.PORTFOLIO_ASSETS': JSON.stringify({
      portrait:
        publicAsset('profile.jpg') ||
        publicAsset('profile.jpeg') ||
        publicAsset('profile.png') ||
        publicAsset('profile.webp'),
      cv: publicAsset('cv.pdf'),
    }),
  },
})
