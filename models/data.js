const todos = [];
  
 
 function getAll() {
    return todos;
 }
 
 function getOne(id){
     return todos[id];
 }

 const create = (todo) => {
    todos.push(todo);
  }
  
  const delOne = (id) => {
    todos.splice(id, 1);
  }

 module.exports = {
    getAll,
    getOne,
    delOne,
    create,
 };
  