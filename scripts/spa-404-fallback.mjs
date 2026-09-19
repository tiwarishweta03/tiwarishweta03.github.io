import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')
const index = join(dist, 'index.html')
const fallback = join(dist, '404.html')

if (!existsSync(index)) {
  console.error('dist/index.html missing — run vite build first')
  process.exit(1)
}

copyFileSync(index, fallback)
console.log('Copied dist/index.html -> dist/404.html for GitHub Pages SPA routing')
