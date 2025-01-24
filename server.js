var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var express = require('express');
var path = require('path');
//var crypto = require('crypto');
var app = express();
var server = require('http').createServer(app);
const ImageDataURI = require('image-data-uri');

const dataURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAIAAAFlEcHbAAAAB3RJTUUH1gMWFjk7nUWcXQAAAAlwSFlzAABOIAAATiABFn2Z3gAAAARnQU1BAACxjwv8YQUAAAAeSURBVHjaY7h79y7DhAkTGIA04/Tp0xkYGJ49ewYAgYwLV/R7bDQAAAAASUVORK5CYII=';
const fileName = 'decoded-image.png';

ImageDataURI.outputFile(dataURI, filePath);
var port = 8008;
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(session({ saveUninitialized: true, resave: true, secret: "ogbdfoodbkfpobfskpod32332323|_+sevsdvv//?~ZZ" }));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.js'));
});
app.get('/getcadetlist', function(req, res) {
    //send json array
    res.json(['zangus', 'jyang']);
});
app.get('/getcadet/:cadet', function(req, res) {
    //send json object
    res.sendFile(path.join(__dirname, '/cdmisdata/'+req.params.cadet+'.xml'));
});
server.listen(port, function () { return console.log("Le serveur est listener sur porte ".concat(port, "!")); });