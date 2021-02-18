import React, { useEffect, useState } from "react";
import Axios from "axios";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4001/api/get").then((response) => {
      setTodoList(response.data);
    });
  });

  const submitTodo = () => {
    Axios.post("http://localhost:4001/api/insert", { todo: todo })
      .then(() => {
        setTodoList([...todolist, todo]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    Axios.delete(`http://localhost:4001/api/delete/${id}`);
  };

  return (
    <div className="todo-container">
      <div className="input">
        <h1>TODO APP</h1>
        <input
          type="text"
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
              {value.todo}

              <button
                onClick={() => {
                  deleteTodo(value.id);
                }}
                className="delete"
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
