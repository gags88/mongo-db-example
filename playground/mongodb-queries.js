const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5affbb0c23dc5a050c0b8262';

if (!ObjectID.isValid(id)) {
    return console.log('Invalid ID passed');
}

/* Todo.find({ _id: id }).then((todos) => {
    console.log(todos);
}, (error) => {
    console.log('Unable to find Todos');
});

Todo.findOne({ _id: id }).then((todo) => {
    console.log(todo);
}, (error) => {
    console.log('Unable to find Todo');
}); */

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Unable to find Todo');
    }
    console.log(todo);
}, (error) => {
    console.log(`Something went wrong: ${error.message}`);
});