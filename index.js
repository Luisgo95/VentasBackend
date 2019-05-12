//El siguiente código es un ejemplo de servidor web escrito en Node.js.
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 7000;
const server = http.createServer(app);
server.listen(port);