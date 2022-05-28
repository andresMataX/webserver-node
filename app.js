const express = require('express');
const app = express();
const port = 8080;

// Middleware -> use
// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Saludando al mundo');
});

app.get('*', (req, res) => {
    res.send('404 | Page Not Found');
});

app.listen(port, () => {
    console.log(`Ejemplo de aplicación corriendo en el puerto http://localhost:${port}`);
});