//======================================
// Get all module ======================
//======================================


var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');
var fs=require('fs');
var path=require('path');


var app= express();

/*app.get('/', function(req,res){
    res.send('hello World !');
}); */

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

//======================================
//setup mongodb connection =============
//======================================
var dbURI = 'mongodb://localhost/blog';
mongoose.connect(dbURI);
mongoose.connection.once('connected', function(){
    console.log(dbURI + ' Database connected')
});

//======================================
//include all model files using fs modules ===
//======================================
fs.readdirSync('./server/models').forEach(function(file){
    //check if file has .js extension
    if(file.indexOf('.js'));
    require('./server/models/' + file);
});


//======================================
//include all controllers files using fs modules ===
//======================================
fs.readdirSync('./server/controllers').forEach(function(file){
    //check if file has js extension
    if(file.indexOf('.js'));
    var route = require('./server/controllers/' + file);
    route.Controller(app);

})


app.listen(5000);
