const http = require('http')
const url = require('url')

const hostname = '0.0.0.0';
const port = process.env.port || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write('Hello World!');
  res.end();
}).listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
});