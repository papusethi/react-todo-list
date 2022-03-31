import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  // For searching purpose
  const [searchStr, setSearchStr] = useState("");
  const searchChangeHandler = (event) => {
    setSearchStr(event.target.value.trim());
  };

  return (
    <div className="bg-light border rounded p-4 my-2">
      <div className="d-flex justify-content-between mb-3">
        <h4 className="me-5">Your Todo List</h4>
        <h4 className="text-danger">{props.headingText}</h4>
        <div className="d-flex input-group w-25 rounded">
          <span className="bg-dark text-light  input-group-text">Search</span>
          <input
            type="text"
            className="form-control"
            placeholder="Start typing to search..."
            onChange={searchChangeHandler}
          />
        </div>
      </div>

      {props.todos
        .filter((todoItem) => todoItem.name.match(searchStr))
        .map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            userId={todoItem.userId}
            name={todoItem.name}
            completed={todoItem.completed}
            toggleTaskCompleted={props.toggleTaskCompleted}
            deleteTodoItem={props.deleteTodoItem}
            editTodoItemName={props.editTodoItemName}
          />
        ))}
    </div>
  );
};

export default TodoList;
