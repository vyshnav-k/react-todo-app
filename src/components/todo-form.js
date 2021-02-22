import React, { useEffect, useState } from "react";
import Axios from "axios";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:4001/api/get").then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    });
  }, []);

  const submitTodo = () => {
    Axios.post("http://localhost:4001/api/insert", { todo: todo })
      .then((response) => {
        alert(response.data)
        setTodoList([...todolist, todo]);
        window.location.reload()
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    Axios.delete(`http://localhost:4001/api/delete/${id}`).then((response)=>{
      alert(response.data)
      window.location.reload()
      
    })
  };
  const editTodo = (id) => {
  var newtodo= prompt("Lets edit the todo...")
  Axios.put(`http://localhost:4001/api/delete/${id}/${newtodo}`).then((response)=>{
    alert(response.data)
     window.location.reload()
  })
  };

  return (
    <div className="todo-container">
      <div className="input">
        <h1>TODO APP</h1>
        <input
          type="text"
          Edit
          name="text"
          id="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Add your task"
        />

        <button className="add-btn" onClick={submitTodo}>
          ADD
        </button>
        <br />
      </div>

      {todolist !== [] ? (
        <ul>
          {todolist.map((value) => (
            <li className="todo-list">
              {value.list}

              <button
                className="button"
                onClick={() => {
                  editTodo(value.id,value.list);
                }}
              >
               
             
                Edit
              </button>

              <button
                onClick={() => {
                  deleteTodo(value.id);
                }}
                className="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
