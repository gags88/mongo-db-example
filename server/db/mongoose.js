const mongoose = require('mongoose');

// Mongoose configuration
mongoose.Promise = global.Promise; // This line sets up mongoose to use promises

// heroku config:set MONGOLAB_URI=mongodb://root:root@ds229450.mlab.com:29450/todoapp
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose }