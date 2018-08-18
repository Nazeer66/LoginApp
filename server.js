const http = require('http');
const app = require('./node_backend/app');

/*const server = http.createServer((req, res) => {

res.end("Welcome to Node");

});*/

const server = http.createServer(app);

server.listen(3000);

