module.exports = (sequelize, Sequelize) => {
	const producto = sequelize.define('producto', {
        Imagen: {
            type: Sequelize.BLOB
            },
        nombre: {
		type: Sequelize.STRING
        },
  
    descripcion: {
		type: Sequelize.STRING
        },
    Precio: {
		type: Sequelize.number
        },
    Precio_Venta: {
		type: Sequelize.number
        },
    Fecha_Entrada: {
        type: Sequelize.date
        },
        Fecha_Vencimiento: {
		type: Sequelize.date
        },
    Cantidad: {
		type: Sequelize.number
        },
    IdUsuarios: {
		type: Sequelize.number
        }
	});
	return producto;
}
