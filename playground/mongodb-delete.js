const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/'
const dbName = 'TodoApp'

    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) {
            return console.log('Unable to connect to database');
        }
        const db = client.db(dbName);

        // delete many
        // db.collection('Todos')
        // .deleteMany({text: 'Learn Node'})
        // .then((result) => {
        //   console.log(result);
        // })
        // delete one

        // find one and delete
        db.collection('Todos')
        .findOneAndDelete({text: 'Learn Node'})
        .then((result) => {
          console.log(result);
        });

        client.close();
    });
