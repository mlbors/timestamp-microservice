const http = require('http')
const url = require('url')

const service = require('./service')

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {

    const path = url.parse(req.url).pathname.slice(1).replace(/%20/g, ' ')
    
    res.writeHead(200, {'Content-Type': 'application/json'})    
    res.write(JSON.stringify(service(path)));
    res.end();

  }

}).listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
})