//El siguiente código es un ejemplo de servidor web escrito en Node.js.

const http = require('http');

const hostname = '127.0.0.25';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});