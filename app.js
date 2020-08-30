// imports 
// express module 
const express = require('express');
// native path module, which provides utilities for working with file and directory paths
const path = require('path');
// body parser package, which makes the form data available on the request body; retrieves whatever data the user has submitted via the form
const bodyParser = require('body-parser');
// the export val of the routes file
const routes = require('./routes/index');

// creating a new Express app using the expressfunction and assigning it to an app variable.
const app = express();

// build the path to the views(pug templates) folder using itsjoin method and __dirname(which returns the directory in which the currently executing script resides)
app.set('views', path.join(__dirname, 'views'));
// use Pug as a layout engine
app.set('view engine', 'pug');

// using body-parser’s urlencoded method allows us to handle data sent as application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// whenever it receives a request from forward slash anything, it should use the routes file.
app.use('/', routes);

// export the app variable so that it can be imported and used in other files
module.exports = app;
