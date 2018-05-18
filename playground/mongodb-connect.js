// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// To know _id prop
/* const obj = new ObjectID();
console.log(obj); */

MongoClient.connect('mongodb://localhost:27017/TodoApp/', {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongo Database');
    }
    console.log('Mongo Database connected');
    const db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (error, result) => {
        if (error) {
            return console.log('Not able to insert into Todos collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    /* db.collection('Users').insertOne({
        name: 'Gagan',
        age: 29,
        location: 'India'
    }, (error, result) => {
        if (error) {
            return console.log('Not able to insert into User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }) */

    // console.log(result.ops[0]._id.getTimestamp());

    client.close();
});