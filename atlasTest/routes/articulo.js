'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var ArticuloController = require('../controllers/articulo');
// Llamamos al router
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/articulo', md_auth.ensureAuth, ArticuloController.create );
api.get('/articulo/:IdArticulo', md_auth.ensureAuth, ArticuloController.getById );
// Exportamos la configuración
module.exports = api;