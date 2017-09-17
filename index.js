const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  console.log('ok')
})

server.listen(8000)