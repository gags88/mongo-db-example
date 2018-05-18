const mongoose = require('mongoose');

// Mongoose configuration
mongoose.Promise = global.Promise; // This line sets up mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose }