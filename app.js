const express = require('express');
const app = express();
const port = 8080;

// Middleware -> use
// Servir contenido estático
app.use(express.static('public'));

// No se ejecuta debido al uso del middleware
// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

app.get('/hola-mundo', (req, res) => {
    res.send('Saludando al mundo');
});

// Ruta para quitar el .html de generic
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Ejemplo de aplicación corriendo en el puerto http://localhost:${port}`);
});