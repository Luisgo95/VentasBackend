const express = require('express');
const router = express.Router();
const producto = require('../controller/c_producto');

router
	.get('/', producto.findAll)
    .post('/', producto.create);
router
	.get('/:id', producto.findByPk)
    .delete('/:id', producto.delete)
    .put('/:id', producto.update);


module.exports = router;