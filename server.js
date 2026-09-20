// server.js — cPanel Node.js App entry point
const { createServer } = require('http')
const { parse } = require('url')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || process.env.APPLICATION_PORT || 3000

// Verify if .next build directory exists
const nextDir = path.join(__dirname, '.next')
const hasBuild = fs.existsSync(nextDir)

let nextApp = null
let nextHandler = null
let preparePromise = null

if (hasBuild) {
  try {
    const next = require('next')
    const dev = process.env.NODE_ENV !== 'production'
    nextApp = next({ dev, dir: __dirname })
    nextHandler = nextApp.getRequestHandler()
    preparePromise = nextApp.prepare().catch((err) => {
      console.error('Next.js preparation error:', err)
      return err
    })
  } catch (err) {
    console.error('Error initializing Next.js:', err)
  }
}

// Start HTTP server synchronously so Passenger immediately connects
const server = createServer(async (req, res) => {
  try {
    if (!hasBuild || !nextApp) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>Kelly Portfolio — Deploying</title></head>
        <body style="font-family:system-ui,sans-serif;padding:50px;background:#0f0f0f;color:#d4af37;text-align:center;">
          <h1 style="font-size:2rem;letter-spacing:1px;">Kelly Portfolio — Initializing</h1>
          <p style="color:#f3e5ab;margin-top:16px;">The <code>.next</code> build folder is currently uploading or waiting to be deployed.</p>
          <p style="color:#888;font-size:0.9rem;">Once the GitHub Actions deployment finishes, refresh this page.</p>
        </body>
        </html>
      `)
    }

    const prepResult = await preparePromise
    if (prepResult instanceof Error) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.end(`
        <div style="font-family:monospace;padding:24px;background:#1a1a1a;color:#ff6b6b;">
          <h2>Next.js Startup Error</h2>
          <pre>${prepResult.stack || prepResult.message}</pre>
        </div>
      `)
    }

    const parsedUrl = parse(req.url, true)
    await nextHandler(req, res, parsedUrl)
  } catch (err) {
    console.error('Request handler error:', err)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(`<div style="font-family:monospace;padding:24px;"><pre>${err.stack || err}</pre></div>`)
  }
})

server.listen(port, () => {
  console.log(`> Kelly Portfolio server listening on port ${port}`)
})
