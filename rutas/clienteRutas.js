const express = require('express');
const router = express.Router();
const clienteControlador = require('../controlador/clienteControlador');

router.get('/', clienteControlador.getTodosLosClientes);
router.get('/busqueda', clienteControlador.buscarCliente);
router.get('/:id', clienteControlador.getClienteId);
router.post('/', clienteControlador.crearCliente);
router.put('/:id', clienteControlador.actualizarCliente);
router.delete('/:id', clienteControlador.eliminarCliente);

router.get('/', clienteControlador.getTodosLosClientes);

// CONSULTA Y REPORTES
//  BUSCAR LOS CLIENTES QUE TENDIO UN OPERADOR
router.get('/operador/:nombreOperador',clienteControlador.getClientePorOperador);


module.exports = router;

// OPRADOR-LIBRO    CLIETE-VERSICULO