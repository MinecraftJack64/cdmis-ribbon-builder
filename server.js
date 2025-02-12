var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var express = require('express');
var path = require('path');
//var crypto = require('crypto');
var app = express();
var server = require('http').createServer(app);
const ImageDataURI = require('image-data-uri');
var fs = require('fs');
var port = 8008;
var cadets = [];
fs.readdirSync(path.join(__dirname, "cdmisdata")).forEach(file => {
    cadets.push(file.replace(".xml", ""));
});
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'images')));
//app.use(session({ saveUninitialized: true, resave: true, secret: "ogbdfoodbkfpobfskpod32332323|_+sevsdvv//?~ZZ" }));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.js'));
});
app.get('/getcadetlist', function(req, res) {
    //send json array
    res.json(cadets);
});
app.get('/getcadet/:cadet', function(req, res) {
    //send json object
    res.sendFile(path.join(__dirname, '/cdmisdata/'+req.params.cadet+'.xml'));
});
app.get('/getcadet2', function(req, res) {
    //send json object
    res.sendFile(path.join(__dirname, '/cdmisdata/all.json'));
});
app.post('/savecadet/:cadet', function(req, res){
    const dataURI = req.body.data;
    console.log(req.params.cadet+" "+dataURI);
    console.log("");
    //console.log(dataURI);
    ImageDataURI.outputFile(dataURI, path.join(__dirname, '/output/'+req.params.cadet+".png"));
    res.send("ok");
});
server.listen(port, function () { return console.log("Le serveur est listener sur porte ".concat(port, "!")); });