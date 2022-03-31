import React, { useState } from "react";

const NewTodoForm = (props) => {
  const [todoName, setTodoName] = useState("");
  const [todoUserId, setTodoUserId] = useState("");
  const [isCompleted, setCompleted] = useState(false);

  const nameChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const userIdChangeHandler = (event) => {
    setTodoUserId(event.target.value);
  };

  const checkboxHandler = (event) => {
    if (event.target.value == "on") {
      setCompleted(true);
    }
  };

  const newTodoSubmitHandler = (event) => {
    event.preventDefault();

    // creating an object
    const todoData = {
      userId: todoUserId,
      id: Math.random().toString(),
      name: todoName,
      completed: isCompleted,
    };

    console.log(todoData);

    props.addNewTodoItem(todoData);
    setTodoName("");
    setTodoUserId("");
    setCompleted(false);
  };

  return (
    <div>
      <div className="alert-warning rounded my-2 p-4  ">
        <form onSubmit={newTodoSubmitHandler}>
          <div className="row">
            <div className="col-md-2">
              <label>
                <h5>User ID</h5>
              </label>
              <br />

              <select
                onChange={userIdChangeHandler}
                className="form-select"
                value={todoUserId}
              >
                <option value="0">Select User</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
                <option value="4">User 4</option>
                <option value="5">User 5</option>
                <option value="6">User 6</option>
                <option value="7">User 7</option>
                <option value="8">User 8</option>
                <option value="9">User 9</option>
                <option value="10">User 10</option>
              </select>
            </div>

            <div className="col-md-7">
              <label>
                <h5>Todo Title</h5>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                value={todoName}
                onChange={nameChangeHandler}
              />
            </div>

            <div className="col-md-2">
              <label className="form-check-label" htmlFor="completed">
                <h5>Completed</h5>
              </label>
              <br />
              <input
                className="form-check-input p-3 me-2"
                type="checkbox"
                id="completed"
                onChange={checkboxHandler}
              />
            </div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Add to list
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTodoForm;
