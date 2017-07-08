//lesson 1 ***ARRAYS***

//***It should have a place to store todos***
// var todos = ["item 1", "item 2", "item 3"];

//***It should have a way to display todos***
//console.log(todos);

//***It should have a way to add new todos***
// todos.push("item 4");

//***It should have a way to change a todo***
// todos[0] = "changed 1";

//***It should have a way to delete a todo***
// todos.splice(0, 1);
//todos is now ['item 2', 'item 3', 'item 4'];
//////////////END LESSON//////////////

//lesson 2 ***FUNCTIONS***

//***It should have function to display todos***
// function displayTodos() {
//   console.log("My todos:", todos);
// }
//displayTodos();

//***It should have a function to add todos***
// function addTodo(todo) {
//   todos.push(todo);
//   displayTodos();
// }
// addTodo("kick butt");

//***It should have a function to change todos***
// function changeTodo(position, newValue) {
//   todos[position] = newValue;
//   displayTodos();
// }
// changeTodo(0, "changed");

//***It should have a function to delete todos***
//splice takes position (which one to delete) and 1 (total to delete)
// function deleteTodo(position) {
//   todos.splice(position, 1);
//   displayTodos();
// }
// deleteTodo(0);
//////////////END LESSON//////////////

//lesson 3 ***OBJECTS***

//***It should store the todos array on an object***
// var todoList = {
//   todos: ["item 1", "item 2", "item 3"]
// };

//***It should have a display todos method***
// var todoList = {
//   todos: ["item 1", "item 2", "item 3"],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   }
// };

//***It should have an addTodo method***
// var todoList = {
//   todos: ["item 1", "item 2", "item 3"],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   }
// };
//***It should have a changeTodo method***
// var todoList = {
//   todos: ["item 1", "item 2", "item 3"],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   }
// };
//***It should have a deleteTodo method***
// var todoList = {
//   todos: ["item 1", "item 2", "item 3"],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   }
// };
//////////////END LESSON//////////////

//Lesson 4 ***BOOLEANS***

//***todoList.addTodo should add objects***
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   }
// };

//***todolist.changeTodo should change the todoText property***var todoList = {
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   }
// };
// todoList.addTodo('first try');
// todoList.changeTodo(0, 'second try');

//***todoList.toggleCompleted should change the completed property***
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log("My Todos:", this.todos);
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };
// todoList.addTodo("finish this one.");
// todoList.toggleCompleted(0);
//////////////END LESSON//////////////

//lesson 5 ***LOOPS***

//***.displayTodos should show .todoText***
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log("My Todos:");
//     for(var i = 0; i < this.todos.length; i++) {
//       console.log(this.todos[i].todoText);
//     }
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };

// todoList.addTodo("first");

//***.displayTodos should tell you if .todos is empty***
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     if (this.todos.length === 0) {
//       console.log("Your todo list is empty!");
//     } else {
//       console.log("My Todos:");
//       for (var i = 0; i < this.todos.length; i++) {
//         console.log(this.todos[i].todoText);
//       }
//     }
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };
// // todoList.addTodo("kick ass!");
// todoList.displayTodos();

//***.displayTodos should show .completed***
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
todoList.addTodo("kick ass!");
todoList.addTodo("kick more ass!");
todoList.toggleCompleted(1);
//////////////END LESSON//////////////
