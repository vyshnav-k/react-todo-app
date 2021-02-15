import React, {useState} from "react"
import './App.css';

import Form from "./components/todo-form"

function App() {
  return (
    <div className="App">
      <header>
      <h1> TO-DO APP</h1> 
      </header>
      <Form/>
   
    
    </div>
  );
}

export default App;
