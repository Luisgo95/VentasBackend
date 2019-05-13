const db = require('../config/db.config.js');
const producto = db.producto;

exports.create = (req, res) =>
{
	producto.create
	(
		{
						//Imagen: req.body.Imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            Precio: req.body.Precio,
            Precio_Venta: req.body.Precio_Venta,
            Fecha_Entrada: req.body.Fecha_Entrada,
            Fecha_Vencimiento: req.body.Fecha_Vencimiento,
            Cantidad: req.body.Cantidad,
            IdUsuarios: req.body.IdUsuarios
                        
		}
	)
	.then (
		producto => {res.status(200).json(producto);}
	)
	.catch (

		err => {res.status(500).json({ error: err })}
	);
};




exports.findAll = (req, res) => 
{
	producto.findAll()
	.then (
		producto => {res.status(200).json(producto);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};

exports.findByPk = (req, res) => 
{
    producto.findByPk(req.params.id).then(producto => {res.send(producto);}
		).catch(		
			err => {res.status(500).json({ error: err });
	});
};

exports.update = (req, res) =>
{
	producto.update
	(
		{
          //  Imagen: req.body.Imagen,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            Precio: req.body.Precio,
            Precio_Venta: req.body.Precio_Venta,
            Fecha_Entrada: req.body.Fecha_Entrada,
            Fecha_Vencimiento: req.body.Fecha_Vencimiento,
            Cantidad: req.body.Cantidad,
            IdUsuarios: req.body.IdUsuarios
		},
		{
			where: { id: req.params.id }
		}
	)
	.then (
		producto => {res.status(200).send(producto);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};


exports.delete = (req, res) =>
{
	producto.destroy
	(
		{
			where: { id: req.params.id }
		}
	)
	.then (
		producto => {res.status(200).json(producto);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};

