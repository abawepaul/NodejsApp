// import express module 
const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// import the export val of the routes file
const routes = require('./routes/index');

// creating a new Express app using the expressfunction and assigning it to an app variable.
const app = express();

// pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use('/', routes);

// export the app variable so that it can be imported and used in other files
module.exports = app;
