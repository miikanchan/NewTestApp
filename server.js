/*
This script depends on Node.js and Express
Install node.js form www.node.org

Install Express by Windows Command Prompt
Type "npm install Express"
 */

var express = require('express');
var app = express();
var expressLayouts = require ('express-ejs-layouts');
var bodyParser= require ('body-parser');
port = process.argv[2] || 8000;

//use ejs and express Layouts
app.set('view engine', 'ejs');
app.use (expressLayouts);


//var router =require ('./js/routes/route');
//app.use('/', router);
//use body parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));


app.use(
        '/', //the URL throught which you want to access to you static content
        express.static(__dirname ) //where your static content is located in your filesystem
    );


//app.use (express.static(__dirname + '/public'));

app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");