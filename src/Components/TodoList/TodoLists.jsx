import React from "react";
import {Checkbox} from "@material-ui/core"


function TodoLists(props) {
  const style={
    color : "rgb(99, 122, 131)",
    textDecoration : "line-through"
  }
  return (
    <>
      <div className="tasks">
        {props.list.map((e, index) => {
          return (
            <h2 key={index}>
              <Checkbox
                id={`${index}`}
                checked={props.isDone[index]}
                onChange={props.handleChange}               
                type="checkbox"
                color="default"
              />
              <p style={props.isDone[index]? style: null}>{props.list[index]}</p>
              <img
                alt="delete"
                width="20px"
                src="./trash-solid.svg"
                className="fa-trash"
                id={index}
                onClick={props.deleteItem}
              />
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default TodoLists;
