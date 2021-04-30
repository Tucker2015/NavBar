const { createServer } = require('http')
const next = require('next')
const NodeMediaServer = require('node-media-server');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const config = {

  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: false,
    ping: 60,
    ping_timeout: 30,

  },
  http: {
    port: 8888,
    mediaroot: './media',
    allow_origin: '*'
  },
  https: {
    port: 8443,
    mediaroot: './media',
    allow_origin: '*',
    key: './security/cert.key',
    cert: './security/cert.pem',

  },
  trans: {
    ffmpeg: '/usr/local/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  }
};


app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://w.w')
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
var nms = new NodeMediaServer(config)
nms.run();