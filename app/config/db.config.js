const env = require('./env');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    env.database,
    env.username,
    env.password, {
        host: env.host,
        dialect: env.dialect,
        operatorsAliases: false,
        pool: {
            max: env.max,
            min: env.pool.min,
            acquire: env.pool.acquire,
            idle: env.pool.idle
        }
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Agregar los modelos de los objetos
//db.empresa = require('../model/empresa.model.js')(sequelize, Sequelize);
db.producto = require('../model/m_productos')(sequelize, Sequelize);

module.exports = db;