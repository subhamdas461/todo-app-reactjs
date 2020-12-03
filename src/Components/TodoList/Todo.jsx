import React, { useState } from "react";

import TodoLists from "./TodoLists";

const Todo = () => {
  const [value, setValue] = useState("");
 
  let data = localStorage.Todo ? JSON.parse(localStorage.Todo).value : [] 
  const [list, setList] = useState(data);
  const [isDone,setIsdone] = useState(localStorage.Completed ? JSON.parse(localStorage.Completed) : [])

  const handleChange = (e) => {   
    const { value ,checked ,type,id} = e.target;
    if(type === "checkbox"){
       isDone[id] = checked;
       setIsdone([...isDone]);
       localStorage.setItem("Completed",JSON.stringify(isDone))
      }
      else
      setValue(value);
    };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(value)) {
      setValue("");
      return;
    }
    let curr = list.concat(value);
    let currentList = { value: curr };
    localStorage.setItem("Todo", JSON.stringify(currentList));
    let realList = JSON.parse(localStorage.Todo).value;
    setList(realList);

    isDone.push(false)
    localStorage.setItem("Completed",JSON.stringify(isDone))
    setIsdone(JSON.parse(localStorage.Completed));
    setValue("");
  }
  const deleteItem = (e) => {
    let newList = list.filter((item, ind) => ind !== parseInt(e.target.id));
    setList(newList);
    let newIsdone = isDone.filter((item, ind) => ind !== parseInt(e.target.id))
    setIsdone(newIsdone)
    let currentList = { value: newList };
    localStorage.setItem("Todo", JSON.stringify(currentList));
    localStorage.setItem("Completed",JSON.stringify(newIsdone))
  }
  return (
    <div className="task-main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Add to-do"
          value={value}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <TodoLists
          isDone={isDone}
          list={list}
          deleteItem={deleteItem} 
          handleChange={handleChange}     
      />
    </div>
  );
};

export default Todo;
