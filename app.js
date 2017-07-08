//lesson 1 ***ARRAYS***

//It should have a place to store todos
var todos = ["item 1", "item 2", "item 3"];

//It should have a way to display todos
//console.log(todos);

//It should have a way to add new todos
todos.push("item 4");

//It should have a way to change a todo
todos[0] = "changed 1";

//It should have a way to delete a todo
todos.splice(0, 1);
//todos is now ['item 2', 'item 3', 'item 4'];

//lesson 2 ***FUNCTIONS***

//It should have function to display todos
function displayTodos() {
  console.log("My todos:", todos);
}
//displayTodos();

//It should have a function to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}
addTodo('kick butt');

//It should have a function to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
changeTodo(0, "changed");

//It should have a function to delete todos
//splice takes position (which one to delete) and 1 (total to delete)
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
deleteTodo(0);
