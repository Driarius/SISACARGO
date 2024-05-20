const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Operador = require('./Operador');


const Cliente = sequelize.define('cliente', {
    idCliente : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false

    },
    Codigo : {
        type : DataTypes.INTEGER
    },
    Nombre : {
        type : DataTypes.STRING
    },
    ApPaterno : {
        type : DataTypes.STRING
    },
    ApMaterno : {
        type : DataTypes.STRING
    },
    CI : {
        type : DataTypes.STRING
    },
    Direccion : {
        type : DataTypes.STRING
    },
    Telefono : {
        type : DataTypes.INTEGER
    },
    Nit : {
        type : DataTypes.INTEGER
    },
    Correo: {
        type : DataTypes.STRING
    },
    idOperador : {
        type : DataTypes.INTEGER,
        references : {
            model : Operador,
            key : 'idOperador'
        }

    }



}, {freezeTableName : true});
module.exports = Cliente;