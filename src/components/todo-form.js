import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const inputTextHandler = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 100),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  return (
    <div className="todo-container">
      <div className="input">
        <h1>TODO APP</h1>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => inputTextHandler(e)}
          placeholder="Add your task"
        />
        <button className="add-btn" onClick={AddTask}>
          ADD
        </button>
        <br />
      </div>
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className="todo-list">
              {t.value}

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
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
