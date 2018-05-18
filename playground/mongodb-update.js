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
    // https://docs.mongodb.com/manual/reference/operator/update/
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID("5afe547caf9242ce383bddca")
        },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    })
    // http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findOneAndUpdate
    client.close();
});