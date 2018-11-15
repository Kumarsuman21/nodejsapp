var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '172.22.40.172');
console.log('Server running at http://172.22.40.172:8080/');