import React, { useState } from "react";

const TodoItem = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(props.name);

  const changeTodoItemToggled = () => {
    props.toggleTaskCompleted(props.id);
  };

  const handleDelete = () => {
    props.deleteTodoItem(props.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log(name);
    props.editTodoItemName(props.id, name);
    setEditing(false);
  };

  // Template for Editing a todo item
  const editingTemplate = (
    <form onSubmit={handleSave}>
      <label htmlFor={props.id}>
        New name for <strong>{props.name}</strong>
      </label>
      <input
        type="text"
        className="form-control "
        autoComplete="off"
        id={props.id}
        onChange={changeNameHandler}
        value={name}
      />

      <div className="d-flex mt-3">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );

  // Template for Viewing todo items
  const viewTemplate = (
    <div className="d-flex align-items-center w-100 justify-content-between">
      <div>
        <input
          className="form-check-input p-3 me-2"
          type="checkbox"
          id={props.id}
          onChange={changeTodoItemToggled}
          defaultChecked={props.completed}
        />
        <label className="form-check-label mt-2" htmlFor={props.id}>
          <h5>{props.name}</h5>
        </label>
      </div>

      <div>
        <button className="btn btn-warning me-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="card shadow-sm p-3 my-2 ">
      {isEditing ? editingTemplate : viewTemplate}
    </div>
  );
};

export default TodoItem;
