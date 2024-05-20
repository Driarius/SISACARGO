const express = require('express');
const operadorRutas = require('./rutas/operadorRutas');
const clienteRutas = require('./rutas/clienteRutas');
const app = express();


app.use(express.json());
//rutas
app.use('/api/operadores', operadorRutas);
app.use('/api/cliente', clienteRutas);
// levantar el servidor
const PORT = 2000;
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto http://localhost:  ' + PORT);
});