// import './App.css'
import { useState } from 'react';
import { CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {

  const [todos, setTodos] = useState([]);

   fetch('http://localhost:3000/todos')
    .then( async (res) => {
      const response = await res.json();
      console.log(response.allTodos);
      
      setTodos(response.allTodos)
    })

  return (
    <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App
