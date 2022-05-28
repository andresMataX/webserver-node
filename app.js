const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Andrés'
    // }

    res.write('id, nombre\n');
    res.write('1, Andres\n');
    res.write('2, Fernando\n');
    res.end();

}).listen(8080);

console.log('Escuchando en el puerto', 8080);

