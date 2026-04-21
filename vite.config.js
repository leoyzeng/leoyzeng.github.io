import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set this to your GitHub repo name, e.g. '/my-portfolio'
// If deploying to a user/org page (username.github.io), set base to '/'
const REPO_NAME = '/portfolio'

export default defineConfig({
  base: REPO_NAME,
  plugins: [react()],
})
