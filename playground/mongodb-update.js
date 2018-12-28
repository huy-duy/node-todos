const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/'
const dbName = 'TodoApp'

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(dbName);

  // db.collection('Todos')
  // .findOneAndUpdate({
  //   _id: new ObjectID('5c0cc9ca1b2f691fe02e905c')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users')
  .findOneAndUpdate({
    _id: new ObjectID('5c24dcf2f7bf24f35e113372')
  }, {
    $set: {
      name: "Pham Ngoc Huy Duy",

    },
    $min: {
      age: 20
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result.value);
  })

})
