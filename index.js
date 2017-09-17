const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write('Hello World!');
  res.end();
})

server.listen(8080)