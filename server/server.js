const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

/**
Initial server
*/
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

/**
Routes
*/
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((result) => {
    res.send(result);
  }, (err) => {
    res.status(400).send(err);
  })
});



app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
