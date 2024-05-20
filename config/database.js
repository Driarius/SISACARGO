const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('vvicargadb', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps : false
    }
});

//exportador
module.exports = sequelize;
