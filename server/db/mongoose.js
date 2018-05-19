const mongoose = require('mongoose');

// Mongoose configuration
mongoose.Promise = global.Promise; // This line sets up mongoose to use promises

// heroku config:set MONGOLAB_URI=mongodb://root:root@ds229450.mlab.com:29450/todoapp
mongoose.connect(process.env.MONGOLAB_URI).then((success) => {
    console.log('DB Connected Successfully');
}).catch((error) => console.log(error));

module.exports = { mongoose }