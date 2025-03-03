import { useState } from "react";  

export function CreateTodo(){
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
 
 
 return <div>
    <input type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} /> <br />
    <input type="text" placeholder="Details" onChange={(e)=>{setDetails(e.target.value)}} /> <br />
    <button onClick={
      async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:3000/todos', {
          method: "POST",
          body: JSON.stringify({ title: title, details: details}),
          headers: {"Content-type": "application/json"}
        })
        const data = await response.json();
        alert(data.msg);
      }
    }>Create</button>
  </div>
}