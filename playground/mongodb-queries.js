const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

let id = '5c25b19587a3c2075c57daab';
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  completed: true
}).then((todos) => {
  console.log('Todos', todos);
})

Todo.findOne({
  _id: id
}).then((todos) => {
  // console.log('Find one', todos);
  console.log(JSON.stringify(todos, undefined, 2));
})

Todo.findById(id).then((todos) => {
  if(!todos)
    return console.log('Id not found');
  console.log('Find by Id', todos);
  
}).catch((e) => {
  return console.log(e);
})
