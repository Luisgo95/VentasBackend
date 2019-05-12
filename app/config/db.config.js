const env = require('./env.js');

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
db.empresa = require('../model/empresa.model.js')(sequelize, Sequelize);
db.persona = require('../model/persona.model.js')(sequelize, Sequelize);

module.exports = db;