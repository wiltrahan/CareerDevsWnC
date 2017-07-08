//lesson 1 arrays

//It should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];

//It should have a way to display todos
console.log(todos);

//It should have a way to add new todos
todos.push('item 4');

//It should have a way to change a todo
todos[0] = 'changed 1';

//It should have a way to delete a todo
todos.splice(0, 1);
//todos is now ['item 2', 'item 3', 'item 4'];
