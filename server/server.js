const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id))
    return res.status(404).send();

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo)
      return res.status(404).send();
    res.send(todo);
  }).catch((e) => {
    res.status(404).send();
  })
  
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  })
});



app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
