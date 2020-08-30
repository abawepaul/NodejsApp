const auth = require('http-auth');
// importing Express into the routes file
const express = require('express');
const mongoose = require('mongoose');
// path module is for http-auth
const path = require('path');
// express-validator sanitizes and validates user input
const { check, validationResult } = require('express-validator');

// grabbing the router from routes file
const router = express.Router();

const Registration = mongoose.model('Registration');

const basic = auth.basic({
  // let it know where to find the file in which we’ll list the users and passwords
  file: path.join(__dirname, '../users.htpasswd'),
});

// route pattern
 // router-lv middleware
// router.METHOD(route, (req, res) => {
  // callback function(executed whenever somebody visits a URL that matches the route it specifies.)
// });
// The callback receives a req and res parameter, where req is an object full of information that is coming in (such as form data or query parameters) and res is an object full of methods for sending data back to the user. There’s also an optional next parameter which is useful if you don’t actually want to send any data back, or if you want to pass the request off for something else to handle.


// use the router to respond to any requests to the root URL (in this case http://localhost:3000 )
router.get('/', (req, res) => {
  res.render('form', { title: 'Registration Form' });
  // sends a message to the page
  // res.send('It works!');
});



// using router.post to respond to a different HTTP verb
// using the body method to validate two properties on req.body — namely, name and email
router.post('/',
  [
    check('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    check('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ],
  (req, res) => {

    // logging submitted data to terminal
    // console.log(req.body);

    // pass req.body back to the template, so that any valid form inputs aren’t reset
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
        });
    } else {
      res.render('form', {
        title: 'Registration Form',
        errors: errors.array(),
        data: req.body,
      });
    }
  });


// when the user posts data to the server, if validation passes we can go ahead and create a new Registration object and attempt to save it.
// route that lists out all of our registrations
// Mongo’s Collection find method, which, if invoked without parameters, will return all of the records in the collection. Because the database lookup is asynchronous, we’re waiting for it to complete before rendering the view. If any records were returned, these will be passed to the view template in the registrations property. If no records were returned registrations will be an empty array.
// ES6 Promises
// PW Hashing
router.get('/registrations', basic.check((req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('index', { title: 'Listing registrations', registrations });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
}));

module.exports = router;

