// server.js — cPanel Node.js App entry point (standalone output mode)
// Next.js output: "standalone" bundles all deps into .next/standalone/
// so no node_modules/ required on the server.

'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')

process.env.NODE_ENV = 'production'

const port = process.env.PORT || process.env.APPLICATION_PORT || 3000
process.env.PORT = String(port)
process.env.HOSTNAME = '0.0.0.0'

const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js')
const nextDir = path.join(__dirname, '.next')

// ── Standalone mode (preferred) ─────────────────────────────────────────────
if (fs.existsSync(standaloneServer)) {
  console.log('> [server.js] Booting via .next/standalone/server.js')
  require(standaloneServer)

// ── .next exists but no standalone — legacy fallback ────────────────────────
} else if (fs.existsSync(nextDir)) {
  console.warn('> [server.js] Standalone bundle missing; falling back to require("next")')
  try {
    const next = require('next')
    const { parse } = require('url')
    const app = next({ dev: false, dir: __dirname })
    const handle = app.getRequestHandler()

    app.prepare().then(() => {
      http.createServer((req, res) => {
        handle(req, res, parse(req.url, true))
      }).listen(port, '0.0.0.0', () => {
        console.log(`> [server.js] Fallback server listening on port ${port}`)
      })
    }).catch((err) => {
      console.error('> [server.js] Next.js prepare() failed:', err)
      process.exit(1)
    })
  } catch (err) {
    console.error('> [server.js] require("next") failed:', err)
    process.exit(1)
  }

// ── No build found — show friendly status page ───────────────────────────────
} else {
  console.warn('> [server.js] No .next build found — serving status page')
  http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(`<!DOCTYPE html>
<html>
<head><title>Kelly Portfolio — Deploying</title></head>
<body style="font-family:system-ui,sans-serif;padding:60px;background:#0f0f0f;color:#d4af37;text-align:center;">
  <h1 style="font-size:2rem;letter-spacing:1px;">Kelly Portfolio</h1>
  <p style="color:#f3e5ab;margin-top:16px;">Deployment in progress — the build is uploading now.</p>
  <p style="color:#888;font-size:0.9rem;">Refresh in ~30 seconds once GitHub Actions completes.</p>
</body>
</html>`)
  }).listen(port, '0.0.0.0', () => {
    console.log(`> [server.js] Status-page server listening on port ${port}`)
  })
}

