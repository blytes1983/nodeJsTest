'use strict'
// Cargamos los modelos para usarlos posteriormente
var Articulo = require('../models/articulo');
//var docVector = require('../consts');

// Conseguir datos de un usuario
module.exports = {
    
    create: (req, res) => {
        
        console.log(req.body);
        
        let articulo = new Articulo(); 
        // mapeo de campos
        articulo['titulo'] = req.body['titulo'];
        articulo['texto'] = req.body['texto'];
        articulo['categoria'] = req.body['categoria'];
        articulo['palabras'] = docVector.vectorize(req.body['texto']);
        articulo.save();
        
        res.status(200).send({ 'message': 'Articulo creado exitosamente' });
    },

    getById: (req, res) => {

        res.status(200).send({ 'message': 'Ombligo' });

    }
}
