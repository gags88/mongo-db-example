const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/User');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error.message);
    })
});

app.get('/todos', (req, res) => {
    const todos = Todo.find().then((results) => {
        res.send({ results });
    }, (error) => {
        res.status(400).send(error);
    });
})

app.listen(port, () => {
    console.log(`Started Listening on port ${port}`);
})