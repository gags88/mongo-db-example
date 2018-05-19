const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

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

// Get Todo By Id

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    const todo = Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo })
    }, (error) => {
        res.status(400).send({ 'error': error.message });
    })
})

app.listen(port, () => {
    console.log(`Started Listening on port ${port}`);
})