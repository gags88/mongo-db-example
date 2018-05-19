require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send({ 'error': error.message });
    })
});

app.get('/todos', (req, res) => {
    const todos = Todo.find().then((results) => {
        res.send({ results });
    }).catch((e) => {
        res.status(400).send({ 'error': error.message });
    });
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(400).send({ 'error': error.message });
    })
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo, 'result': 'deleted' });
    }).catch((e) => {
        res.status(400).send({ 'error': error.message });
    })
});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo, 'message': 'updated' })
    }).catch((e) => {
        res.status(400).send({ 'error': error.message });
    })

});

app.listen(port, () => {
    console.log(`Started Listening on port ${port}`);
})

module.exports = { app };