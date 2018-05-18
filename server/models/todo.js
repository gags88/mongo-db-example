const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

const Todo = mongoose.model('Todo', TodoSchema);

/* const newTodo = new Todo({
    text: 'Cook Dinner',
    completed: true,
    completedAt: new Date()
}); */

/* newTodo.save().then((doc) => {
    console.log('Saved Todo', doc)
}, (error) => {
    console.log('Unable to add Todo::', error.message)
}); */

module.exports = { Todo }