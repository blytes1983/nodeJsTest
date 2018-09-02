// =======================
// get the packages we need ============
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var articulo_routes = require('./routes/articulo'); 

//var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
//var config = require('./config'); // get our config file

var uri = "mongodb+srv://blytes:grupoassa12@cluster0-ag0cm.mongodb.net/admin";

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3200; // used to create, sign, and verify tokens
mongoose.connect(uri); // connect to database

// use morgan to log requests to the console
app.use(morgan('dev'));

// get an instance of the router for api routes
var apiRoutes = express.Router();

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function (req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.post('/initsetup', function (req, res) {
    // Inicializa Cluster con una DB
    MongoClient.connect(uri, function (err, client) {
        const collection = client.db("Documentos").collection("articulo");
        try {

            collection.insertOne({ "campo1": "Hola Manola" });
            res.json({ "respuesta": "Todo salió bien!" });

        } catch (e) {
            print(e);
        };
        client.close();
    });
});

//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
app.use('/api', articulo_routes);

// ==============================================
/*MongoClient.connect(uri, function (err, client) {

    const collection = client.db("Documentos").collection("textos");
    // perform actions on the collection object

    try {
        collection.insertOne({ "campo1": "Hola Manola" });
    } catch (e) {
        print(e);
    };
    client.close();

});*/

// apply the routes to our application with the prefix /api
//app.use('/api', apiRoutes);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);