module.exports = (sequelize, Sequelize) => {
	const productos = sequelize.define('productos', {
 /**   Imagen: {
            type: Sequelize.BLOB
 },*/
        nombre: {
		type: Sequelize.STRING
        },
  
    descripcion: {
		type: Sequelize.STRING
        },
    Precio: {
		type: Sequelize.FLOAT
        },
    Precio_Venta: {
		type: Sequelize.FLOAT
        },
    Fecha_Entrada: {
        type: Sequelize.DATE
        },
        Fecha_Vencimiento: {
		type: Sequelize.DATE
        },
    Cantidad: {
		type: Sequelize.INTEGER
        },
    IdUsuarios: {
		type: Sequelize.INTEGER
        }
	});
	return productos;
}
