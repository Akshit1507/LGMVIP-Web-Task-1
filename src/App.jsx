import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import {useState} from "react";
import "./App.css";
function App() {
  const [todoItems,setTodoItems]=useState([]);
  const handleAdd = (todoItemName,dueDate)=>{
    console.log(`New Item Added: ${todoItemName} Date:${dueDate}`);
    const newtodoItems=[...todoItems,{todoName:todoItemName,date:dueDate}];
    setTodoItems(newtodoItems);
  }
  const handleDelete=(todoItemName)=>{
    const newtodoItems=todoItems.filter((item)=> item.todoName!== todoItemName);
    setTodoItems(newtodoItems);
  }
  return(
      <center>
      <AppName />
      <AddTodo onNewItem={handleAdd}/>
      {todoItems.length===0 && <WelcomeMessage />}
      <TodoItems items={todoItems} onDelete={handleDelete}/>
      </center>
  )
}

export default App;
