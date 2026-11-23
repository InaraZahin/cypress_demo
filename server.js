// Tiny static file server for the demo app (no dependencies).
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'app');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

http
  .createServer((req, res) => {
    const urlPath = req.url.split('?')[0];
    const file = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
    if (!file.startsWith(ROOT)) return res.writeHead(403).end();
    fs.readFile(file, (err, data) => {
      if (err) return res.writeHead(404).end('Not found');
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'text/plain' });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log(`Demo app running at http://localhost:${PORT}`));
