// const auth = require('http-auth');
// importing Express into the routes file
const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// express-validator sanitizes and validates user input
// const { check, validationResult } = require('express-validator');

// grabbing the router from routes file
const router = express.Router();

// const Registration = mongoose.model('Registration');
// const basic = auth.basic({
//   file: path.join(__dirname, '../users.htpasswd'),
// });

// route pattern
 // router-lv middleware
// router.METHOD(route, (req, res) => {
  // callback function(executed whenever somebody visits a URL that matches the route it specifies.)
// });
// The callback receives a req and res parameter, where req is an object full of information that is coming in (such as form data or query parameters) and res is an object full of methods for sending data back to the user. There’s also an optional next parameter which is useful if you don’t actually want to send any data back, or if you want to pass the request off for something else to handle.


// use the router to respond to any requests to the root URL (in this case http://localhost:3000 )
router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
  // sends a message to the page
  // res.send('It works!');
});

// using router.post to respond to a different HTTP verb
router.post('/', (req, res) => {
  // logging submitted data to terminal
  console.log(req.body);
  res.render('form', { title: 'Registration form' });
});

// router.post('/',
//   [
//     check('name')
//       .isLength({ min: 1 })
//       .withMessage('Please enter a name'),
//     check('email')
//       .isLength({ min: 1 })
//       .withMessage('Please enter an email'),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);

//     if (errors.isEmpty()) {
//       const registration = new Registration(req.body);
//       registration.save()
//         .then(() => { res.send('Thank you for your registration!'); })
//         .catch((err) => {
//           console.log(err);
//           res.send('Sorry! Something went wrong.');
//         });
//     } else {
//       res.render('form', {
//         title: 'Registration form',
//         errors: errors.array(),
//         data: req.body,
//       });
//     }
//   });

// router.get('/registrations', basic.check((req, res) => {
//   Registration.find()
//     .then((registrations) => {
//       res.render('index', { title: 'Listing registrations', registrations });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send('Sorry! Something went wrong.');
//     });
// }));

module.exports = router;

