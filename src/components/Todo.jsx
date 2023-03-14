// import { useState } from "react"
import React, { useState } from "react";

const Todo = () => {
  let [inp, setInp] = useState("");
  let [todos, settodos] = useState([]);

  function updateInp(e) {
    setInp(e.target.value);
  }
  function addTask() {
    if(inp!==""){
      settodos([...todos, inp]);
      localStorage.setItem(1, todos);
    }

    console.log(todos);
    setInp("");
    return;
  }
  function deleteTodo(i) {
    console.log(i);
    let newtodo = todos.filter((e, ind) => {
      if (i !== ind) {
        return e;
      }
    });
    localStorage.setItem(1, todos);
    settodos(newtodo);
  }

  function editable(ind, element) {
    const editabletext = prompt(element);
    let x = (todos[ind] = editabletext);
    settodos([...todos]);
  }
  return (
    <div className='main'>
      <div className="inputcontainer">
      <input
      value={inp}
      onChange={updateInp}
      placeholder='Enter a task'
      type='text'
    />
    <button onClick={addTask}>Add Task</button>
      </div>
      <div className='output'>
      
        {todos.map((element, index) => {
          return (
            <div className="item">
              <h3 key={index}>{element}</h3>


              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </button>


              <button
                onClick={() => {
                  editable(index, element);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
