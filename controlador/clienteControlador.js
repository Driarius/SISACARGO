const Cliente = require('../modelos/Cliente');

exports.getTodosLosClientes = async (peticion, respuesta) => {
    try {
        const cliente = await Cliente.findAll();
        respuesta.json(cliente);

    }catch (error){
        console.log(error);
        respuesta.status(500).send('Error del servidor  '+ error);
    }

};