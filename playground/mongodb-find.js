// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp/', {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongo Database');
    }
    console.log('Mongo Database connected');
    const db = client.db('TodoApp');

    /* db.collection('Todos').find({
        completed: false,
        // id: new ObjectID('5afd9b06e20fea03ba959513')
    }).toArray().then((document) => {
        console.log(JSON.stringify(document, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch Todos', error);
    }); */

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count ${count}`);
    }, (error) => {
        console.log('Unable to fetch count of Todos', error);
    });

    client.close();
});