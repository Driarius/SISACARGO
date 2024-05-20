const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');

const Operador = sequelize.define('operador', {
    idOperador : {
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
    Cargo : {
        type : DataTypes.STRING
    },
    InicioFuncion : {
        type : DataTypes.DATE
    }


}, {freezeTableName : true} );
module.exports = Operador;