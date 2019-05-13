module.exports = (sequelize, Sequelize) => {
	const usuarios = sequelize.define('usuarios', {
        Primer_nombre: {
		type: Sequelize.STRING
        },
  
    Segundo_Nombre: {
		type: Sequelize.STRING
        },
    Apellidos: {
		type: Sequelize.STRING
        },
    email: {
		type: Sequelize.STRING
        },
    password: {
        type: Sequelize.STRING
        }
       
	});
	return usuarios;
}
