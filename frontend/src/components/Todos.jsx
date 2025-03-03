export function Todos({todos}){
  return <div>
    {todos.map(function(todo){
      return <div>
      <h4>{todo.title}</h4>
      <div>{todo.details}</div>
      <button onClick={async()=>{
        console.log(todo._id);
        
       const response = await fetch('http://localhost:3000/todos', {method: "PUT",
         body: JSON.stringify({_id: todo._id}), 
         headers: {"Content-type": "application/json"}});
      // alert(response.msg);
      }}>{todo.completed == true ? "Completed" : "Complete" }</button> <br />
      </div>
     })
    }

  </div>
}