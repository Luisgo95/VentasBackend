const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Importacion de rutas ver ejemplo comentado abajo
//const RouteDetalleFuncion = require('./app/route/detalle_funcion.route');
//const RoutePersona = require('./app/route/persona.route');
const RouteProducto = require('./app/route/producto.route');
 app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./app/config/db.config.js');

// // force: true will drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
//console.log('Drop and Resync with { force: true }');
//});

// Encadenar rutas a la app, ver ejemplo comentado abajo 
//en plural las rutas
//app.use('/personas', RoutePersona);
app.use('/productos', RouteProducto);

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req, res, net) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;