import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const githubToken = env.GITHUB_TOKEN || env.VITE_GITHUB_TOKEN || process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN || ''

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GITHUB_TOKEN': JSON.stringify(githubToken),
      'process.env.GITHUB_TOKEN': JSON.stringify(githubToken),
    },
  }
})
