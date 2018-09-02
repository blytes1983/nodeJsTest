'use strict'
// Cargamos los modelos para usarlos posteriormente
var User = require('../models/articulo');

// Conseguir datos de un usuario
module.exports = {
    create: (req, res) => {
        res.status(200).send({ 'message': 'Articulo creado exitosamente' });
    }
}
