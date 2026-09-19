import { chromium } from '@playwright/test'
import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const url = process.env.RESUME_URL ?? 'http://127.0.0.1:5175/resume'
const outPath = join(root, 'public', 'ShwetaTiwariResume2026.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle' })
await page.emulateMedia({ media: 'print' })
await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0.4in', bottom: '0.4in', left: '0.4in', right: '0.4in' },
})
await browser.close()

copyFileSync(outPath, join(root, 'ShwetaTiwariResume2026.pdf'))
console.log('Generated résumé PDF from', url, '->', outPath)
