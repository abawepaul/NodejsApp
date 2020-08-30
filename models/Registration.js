const mongoose = require('mongoose');


// define a type (as we already have validation in place) and use the trim helper method to remove any superfluous white space from user input. 
const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

// compile a model from the Schema definition, and export it for use elsewhere in the app. 
module.exports = mongoose.model('Registration', registrationSchema);
