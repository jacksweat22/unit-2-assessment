const Todo = require('../models/data');

const index = (req, res, next) => {
  res.render('/index', {
    todos: Todo.getAll(),
    done: '',
  });
};

const create = (req, res) => {
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/');
}

const delOne = (req, res) => {
 Todo.delOne(req.params.id);
  res.redirect('/');
}


module.exports = {
  index,
  create,
  delOne,
};