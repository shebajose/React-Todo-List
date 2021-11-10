import "./App.css";
import AddTodo from "./addTodo";
import TaskList from "./taskList";
import { useState } from "react";

let nextId = 3;
const initialTools = [
  {
    id: 0,
    title: "Buy milk",
    done: true,
  },
  {
    id: 1,
    title: "Eat tacos",
    done: false,
  },
  {
    id: 2,
    title: "Brew tea",
    done: false,
  },
];
function App() {
  const [todos, setTodo] = useState(initialTools);
  
  const handleAddTodo = (title) => {
    setTodo([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodo(todos.map(t =>{
      if(t.id === nextTodo.id){
        return nextTodo;
      }
      else{
        return t;
      }
    }))

  };
  const handleDeleteTodo = (todoId) => {
    setTodo(todos.filter(t => t.id !== todoId)
    );
  };
  return (
    <div className="justify-center">
      <AddTodo 
      onAddTodo={handleAddTodo} /> 
      <TaskList
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onDeleteTodo={handleDeleteTodo}
       />
    </div>
  );
}
export default App;
