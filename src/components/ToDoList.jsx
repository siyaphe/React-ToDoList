// Importing React and the useState hook from the 'react' package
import React, { useState } from 'react';

//------------------[Importing CSS for the component]
import './App.css';

const ToDoList = () => {

    // ---------------- [initial state items]
  const initialState = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }
    
   
  ];

  //----- [Setting up state for todos and newTodo input]
  const [todos, setTodos] = useState(initialState);
  const [newTodo, setNewTodo] = useState("");


 // Function to add a new todo item 

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      setTodos([{ userId: 1, id: newId, title: newTodo, completed: true, editing: false }, ...todos]);
      setNewTodo("");
    }
  };

   // Function to toggle the completion status of a todo item

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  //---------------------------[ Function to delete a todo item]
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };


   // Function to mark a todo item as being edited

  const editTodo = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, editing: true } : todo
    );
    setTodos(updatedTodos);
  };

  
  // Function to save the edited text of a todo item

  const saveTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, title: newText, editing: false } : todo
    );
    setTodos(updatedTodos);
  };

  // Handler for the save button click event

//   const handleSaveClick = (index, newText) => {
//     if (newText.trim()) {
//       saveTodo(index, newText);
//     }
//   };

  return (
    <div className="App">
      <h1>Henri Todo List</h1>          # heading element

    {/* wraps the input field and add button */}
      <div className="input-container"> 
        <input
          type="text"
          value={newTodo}
    // Update the newToDo State with current value whennever it change
          onChange={(e) => setNewTodo(e.target.value)}

    // provides a placeholder text "Add task" to appears when the input is empty.
          placeholder="Add task"
        />
    
    {/* attaches an event handler that calls the addTodo function when the button is clicked */}

        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
    {/* // using the map function, which returns a new array of JSX elements  */}

        {todos.map((todo, index) => (

    // identify which items have changed      
          <li key={todo.id}>
            {todo.editing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.title}
                  onBlur={(e) => saveTodo(index, e.target.value)}
                  autoFocus
                />
                {/* <button onClick={() => handleSaveClick(index, todo.title)}>Save</button> */}
                <button onClick={() => saveTodo(index, todo.title)}>Save</button>
              </>
    //Else (if todo.editing is false)          
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                />

    {/* // to display the title of the todo item */}
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.title}
                </span>

    {/* //  attaches an event handler to call deleteTodo when the button is clicked             */}
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)} disabled={!todo.completed}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

