// CONFIG
const config = require('./common/config/env.config.js'); 

// INCLUDE
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path");


// INITIALIZEZ
const app = express();

// VIEW ENGINE
// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

// STATIC FOLDER
app.use(express.static('public')); //path.join(__dirname,'pubic');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/'));


// ROUTES 
const Routes = require('./routes/routes.config');
Routes.routesConfig(app);


app.listen(config.port, function () {
    console.log('app listening on port %s', config.port);
})