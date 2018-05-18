// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp/', {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongo Database');
    }
    console.log('Mongo Database connected');
    const db = client.db('TodoApp');

    // deleteMany deleteOne findOneAndDelete

    /* db.collection('Todos').deleteMany({text: 'Do Lunch'}).then((result) => {
        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({text: 'Do Lunch'}).then((result) => {
        console.log(result);
    }); */

    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });

    client.close();
});