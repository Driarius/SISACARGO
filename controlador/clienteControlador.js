const Cliente = require('../modelos/Cliente');
const Operador = require('../modelos/Operador');
const { Op, where } = require('sequelize');

//LISTAR TODOS LOS CLIENTES
exports.getTodosLosClientes = async (peticion, respuesta) => {
    try {
        const cliente = await Cliente.findAll();
        respuesta.json(cliente);

    }catch (error){
        console.log(error);
        respuesta.status(500).send('Error del servidor  '+ error);
    }

};
// BUSQUEDA DE CLIENTE POR ID
exports.getClienteId = async (peticion, respuesta) => {
    try {
        const { id } = peticion.params;
        const cliente = await Cliente.findByPk(id);
        if (cliente)
            respuesta.json(cliente);
        else
        respuesta.status(404).send({mensaje : 'REGISTRO DE CLIENTE NO ENCONTRADO !!!!'})
    }catch (error){
        console.log(error);
        respuesta.status(500).send(error);
    }

};

exports.crearCliente = async (peticion, respuesta) => {
    try {
       const nuevoCliente = await Cliente.create(peticion.body);
       respuesta.status(201).json(nuevoCliente);

    }catch (error){
        console.log(error);
        respuesta.status(500).send(error);
    }

};

exports.actualizarCliente = async (peticion, respuesta) => {
    try {
       const { id } = peticion.params;
       const [clienteActualizado] = await Cliente.update(peticion.body,{
        where : { idCliente : id}
       });
       if(clienteActualizado){
        const cliente = await Cliente.findByPk(id);
        respuesta.json(cliente);
       } else {
        respuesta.status(404).send({mensaje : 'LOS DATOS DEL CIENTE HAN SIDO ACTUALIZAOS'});
       }
       
    }catch (error){
        console.log(error);
        respuesta.status(500).send(error);
    }

};
// VERIFICAR
exports.eliminarCliente = async (peticion, respuesta) => {
    try {
      const { id } = peticion.params;
      const eliminarCli = await Cliente.destroy({
        where : {idCliente : id}
      });
      if (eliminarCli)
        respuesta.status(200).json({mensaje : 'EL REGISTRO DEL CLIENTE FUE ELIMINADO CON EXITO'});
    else
    respuesta.status(404).json({mensaje : 'REGISTRO DE CLIENTE NO ENCONTRADO'});

    }catch (error){
        console.log(error);
        respuesta.status(500).send(error);
    }

};


exports.buscarCliente = async (peticion, respuesta) => {
    try{
        const { Nombre} = peticion.query;
        const cliente = await Cliente.findAll({
    
            where : { Nombre : { [Op.like] : `%${Nombre}%`} }
        });
        respuesta.json(cliente);
       
    }catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
};

// VERSICULO = CLIENTE     LIBRO = OPERADOR 
exports.getClientePorOperador= async (peticion, respuesta) =>{
    const {nombreOperador} = peticion.params;
    try{
        const operadorEncontrado = await Cliente.findOne({ where : { Nombre : nombreOperador}});
        if (!operadorEncontrado)
            return respuesta.status(404).json({mensaje: 'Operador no encontrado'});
        const todosClientes = await Cliente.findAll({
            where : {idOperador : operadorEncontrado.idOperador },
            include : [{ model : Operador, as: 'operador'}] 
        });
        respuesta.json(todosClientes);
       }
        
            catch(error){
                console.log(error);
                respuesta.status(500).send(error);

            }
            
}