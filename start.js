// scripts in package.json let you specify arbitrary scripts to run in different scenarios.
// 'npm run watch' in app root folder

// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connection
//   .on('open', () => {
//     console.log('Mongoose connection open');
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });

// require('./models/Registration');
// importing the Express app we created in app.js . (Note that we can leave the .js off the file name in the require statement.)
const app = require('./app');

// tell the app to listen on port 3000 for incoming connections and output a message to the terminal to indicate that the server is running.
const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
