var express = require('express');
var router = express.Router();
const Todo = require('../models/data');
const todosCtrl = require('../controllers/todos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    todos: Todo.getAll(),
    
   });
});

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

router.delete('/:id', todosCtrl.delOne);


module.exports = router;
