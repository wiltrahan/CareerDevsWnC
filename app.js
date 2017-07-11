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
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     if (this.todos.length === 0) {
//       console.log("Your todo list is empty!");
//     } else {
//       console.log("My Todos:");
//       for (var i = 0; i < this.todos.length; i++) {
//         if (this.todos[i].completed === true) {
//           console.log("(x)", this.todos[i].todoText);
//         } else {
//           console.log("( )", this.todos[i].todoText);
//         }
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
// todoList.addTodo("kick ass!");
// todoList.addTodo("kick more ass!");
// todoList.toggleCompleted(1);
//////////////END LESSON//////////////

//lesson 6 ***THINKING IN CODE***

//***.toggleAll: if everything's true, make everything false.***
// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     if (this.todos.length === 0) {
//       console.log("Your todo list is empty!");
//     } else {
//       console.log("My Todos:");
//       for (var i = 0; i < this.todos.length; i++) {
//         if (this.todos[i].completed === true) {
//           console.log("(x)", this.todos[i].todoText);
//         } else {
//           console.log("( )", this.todos[i].todoText);
//         }
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
//   },
//   toggleAll: function() {
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;

//     for (var i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++;
//       }
//     }
//     if (completedTodos === totalTodos) {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//       }
//     }
//     this.displayTodos();
//   }
// };
// todoList.addTodo('first');
// todoList.addTodo('second');
// todoList.toggleAll();

//***toggleAll: Otherwise, make everything true.***
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};
//////////////END LESSON//////////////

//***lesson 7 HTML AND THE DOM***

//Get access to display todos button
//run displayTodos method when someone clicks display button

// var displayTodosButton = document.getElementById("displayTodosButton");

// displayTodosButton.addEventListener("click", function() {
//   todoList.displayTodos();
// });

// var toggleAllButton = document.getElementById("toggleAllButton");

// toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
// });
//////////////END LESSON//////////////

//***lesson 8 GETTING DATA FROM INPUTS***

//***REFACTORING CLICK FUNCTIONS INTO AN OBJECT***

// var handlers = {
//   displayTodos: function() {
//     todoList.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//   }
// };

//***It should have working controls for .addTodo***

// var handlers = {
//   displayTodos: function() {
//     todoList.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//   },
//   addTodo: function() {
//     var addTodoTextInput = document.getElementById("addTodoTextInput");
//     todoList.addTodo(addTodoTextInput.value);
//     addTodoTextInput.value = '';
//   }
// };

//***It should have working controls for .changeTodo***
// var handlers = {
//   displayTodos: function() {
//     todoList.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//   },
//   addTodo: function() {
//     var addTodoTextInput = document.getElementById("addTodoTextInput");
//     todoList.addTodo(addTodoTextInput.value);
//     addTodoTextInput.value = "";
//   },
//   changeTodo: function() {
//     var changeTodoPositionInput = document.getElementById(
//       "changeTodoPositionInput"
//     );
//     var changeTodoTextInput = document.getElementById("changeTodoTextInput");
//     todoList.changeTodo(
//       changeTodoPositionInput.valueAsNumber,
//       changeTodoTextInput.value
//     );
//     changeTodoPositionInput.value = "";
//     changeTodoTextInput.value = "";
//   }
// };

//***It should have working controls for .deleteTodo***

// var handlers = {
//   displayTodos: function() {
//     todoList.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//   },
//   addTodo: function() {
//     var addTodoTextInput = document.getElementById("addTodoTextInput");
//     todoList.addTodo(addTodoTextInput.value);
//     addTodoTextInput.value = "";
//   },
//   changeTodo: function() {
//     var changeTodoPositionInput = document.getElementById(
//       "changeTodoPositionInput"
//     );
//     var changeTodoTextInput = document.getElementById("changeTodoTextInput");
//     todoList.changeTodo(
//       changeTodoPositionInput.valueAsNumber,
//       changeTodoTextInput.value
//     );
//     changeTodoPositionInput.value = "";
//     changeTodoTextInput.value = "";
//   },
//   deleteTodo: function() {
//     var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
//     todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
//     deleteTodoPositionInput.value = "";
//   }
// };

//***It should have working controls for .toggleCompleted***

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};
//////////////END LESSON//////////////

//Lesson 9***ESCAPE FROM THE CONSOLE***

//***There should be an li element for every todo****
//adding new view object to display unordered list.

// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = '';
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       todosUl.appendChild(todoLi);
//     }
//   }
// };

//***Each li element should contain .todoText***
//add the textContent value
// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = '';
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       todoLi.textContent = todoList.todos[i].todoText;
//       todosUl.appendChild(todoLi);
//     }
//   }
// };

//***Each li element should show .completed***

// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = "";
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = "(X) " + todo.todoText;
//       } else {
//         todoTextWithCompletion = "( ) " + todo.todoText;
//       }
//       todoLi.textContent = todoTextWithCompletion;
//       todosUl.appendChild(todoLi);
//     }
//   }
// };
//////////////END LESSON//////////////

//lesson 10 ***CLICK TO DELETE***

// ***THERE SHOULD BE A WAY TO CREATE DELETE BUTTONS***

// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = "";
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = "(X) " + todo.todoText;
//       } else {
//         todoTextWithCompletion = "( ) " + todo.todoText;
//       }
//       todoLi.textContent = todoTextWithCompletion;
//       todosUl.appendChild(todoLi);
//     }
//   },
//   createDeleteButton: function() {
//     var deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.className = 'deleteButton';
//     return deleteButton;
//   }
// };

//***THERE SHOULD BE A DELETE BUTTON FOR EACH TODO***
// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = "";
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = "(X) " + todo.todoText;
//       } else {
//         todoTextWithCompletion = "( ) " + todo.todoText;
//       }

//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }
//   },
//   createDeleteButton: function() {
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "deleteButton";
//     return deleteButton;
//   }
// };
//***EACH LI SHOULD HAVE AN ID THAT HAS THE TODO POSITION***
// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = "";
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = "(X) " + todo.todoText;
//       } else {
//         todoTextWithCompletion = "( ) " + todo.todoText;
//       }

//       todoLi.id = i;
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }
//   },
//   createDeleteButton: function() {
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "deleteButton";
//     return deleteButton;
//   }
// };
//***DELETE BUTTONS SHOULD HAVE ACCESS TO THE TODO ID***
// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.innerHTML = "";
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement("li");
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = "(X) " + todo.todoText;
//       } else {
//         todoTextWithCompletion = "( ) " + todo.todoText;
//       }

//       todoLi.id = i;
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }
//   },
//   createDeleteButton: function() {
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "deleteButton";
//     return deleteButton;
//   }
// };

// var todosUl = document.querySelector('ul');

// todosUl.addEventListener('click', function() {
//   console.log(event.target.parentNode.id);
// });

//***CLICKING DELETE SHOULD UPDATE TODOLIST.TODOS AND THE DOM***
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");

    todosUl.addEventListener("click", function() {
      var elementClicked = event.target;
      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
view.setUpEventListeners();
//////////////END LESSON//////////////
