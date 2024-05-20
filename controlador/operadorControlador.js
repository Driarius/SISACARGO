const Operador = require('../modelos/Operador');
const { Op } = require('sequelize');

exports.getTodosLosOperadores = async (peticion, respuesta) => {
    try {
        const operador = await Operador.findAll();
        respuesta.json(operador);

    }catch (error){
        console.log(error);
        respuesta.status(500).send('Error del servidor'+ error);
    }
};

    exports.getOperadorPorId = async (peticion, respuesta) => {
        try {
            const { id } = peticion.params;
            const operador = await Operador.findByPk(id);
            if (operador)
                respuesta.json(operador);
            else
            respuesta.status(404).send({mensaje : 'El personal operador no fue encontrado !!!!'})
        }catch (error){
            console.log(error);
            respuesta.status(500).send(error);
        }

    };


    exports.crearOperador = async (peticion, respuesta) => {
        try {
           const nuevoOperador = await Operador.create(peticion.body);
           respuesta.status(201).json(nuevoOperador);

        }catch (error){
            console.log(error);
            respuesta.status(500).send(error);
        }

    };


    exports.actualizarOperador = async (peticion, respuesta) => {
        try {
           const { id } = peticion.params;
           const [operadorActualizado] = await Operador.update(peticion.body,{
            where : { idOperador : id}
           });
           if(operadorActualizado){
            const operador = await Operador.findByPk(id);
            respuesta.json(operador);
           } else {
            respuesta.status(404).send({mensaje : 'Datos de Operador no Actualizado'});
           }
           
        }catch (error){
            console.log(error);
            respuesta.status(500).send(error);
        }

    };

    exports.eliminarOperador = async (peticion, respuesta) => {
        try {
          const { id } = peticion.params;
          const eliminado = await Operador.destroy({
            where : {idOperador : id}
          });
          if (eliminado)
            respuesta.status(200).json({mensaje : 'Registro de operador eliminados'});
        else
        respuesta.status(404).json({mensaje : 'Datos de operador no encontrados'});

        }catch (error){
            console.log(error);
            respuesta.status(500).send(error);
        }

    };

    exports.buscarOperador = async (peticion, respuesta) => {
        try{
            const { Nombre} = peticion.query;
            const operador = await Operador.findAll({
        
                where : { Nombre : { [Op.like] : `%${Nombre}%`} }
            });
            respuesta.json(operador);
           
        }catch(error){
            console.log(error);
            respuesta.status(500).send(error);
        }
    };