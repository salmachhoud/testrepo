var express = require('express');
//inclusion d'Express
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/client'));  // Indique que le dossier /client contient des fichiers statiques
app.use(bodyParser.json());


var db=require('./models/db');
var api = require('./server/api');
app.use('/api', api);
app.listen(3000);
console.log('Server is running on port 3000...');
