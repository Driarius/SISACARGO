const express = require('express');
const router = express.Router();
const operadorControlador = require('../controlador/operadorControlador');

router.get('/', operadorControlador.getTodosLosOperadores);
router.get('/busqueda', operadorControlador.buscarOperador);
router.get('/:id', operadorControlador.getOperadorPorId);
router.post('/', operadorControlador.crearOperador);
router.put('/:id', operadorControlador.actualizarOperador);
router.delete('/:id', operadorControlador.eliminarOperador);
//router.get('/busqueda', operadorControlador.buscarOperador);
module.exports = router;