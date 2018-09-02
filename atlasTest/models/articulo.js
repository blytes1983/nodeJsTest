// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Articulo', new Schema({ 
    titulo: String, 
    texto: String, 
    palabras: [{palabra: String,
                freq: Number}],
    categoria: String 
}));