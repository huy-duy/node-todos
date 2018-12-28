const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/'
const dbName = 'TodoApp'

    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) {
            return console.log('Unable to connect to database');
        }
        const db = client.db(dbName);

        // fetch records
        db.collection('Todos')
        .find()
        .toArray()
        .then((docs) => {
          console.table(docs);
        }, (err) => {
          console.log('Unable to fetch Todos', err);
        })

        client.close();
    });
