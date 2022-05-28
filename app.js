const http = require('http');

http.createServer((req, res) => {

    console.log(req);

    res.writeHead(404);

    res.write('404 | Page Not Found');
    res.end();

}).listen(8080);

console.log('Escuchando en el puerto', 8080);

