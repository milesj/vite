import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    // None!
    alias: {},
  },
  experimental: {
    vitePackageEntryPoints: true,
  },
})
