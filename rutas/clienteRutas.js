const express = require('express');
const router = express.Router();
const clienteControlador = require('../controlador/clienteControlador');
router.get('/', clienteControlador.getTodosLosClientes);
module.exports = router;