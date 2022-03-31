import React, { useState } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

const DUMMY_TODOS = require("./TodoStore.json");

const App = () => {
  const [mainTodos, setMainTodos] = useState(DUMMY_TODOS);

  // For adding a new todo item to the list
  const addNewTodoItem = (todoItemObj) => {
    setMainTodos([todoItemObj, ...mainTodos]);
  };

  // For completing the task when toggled
  const toggleTaskCompleted = (id) => {
    const updatedTodoItem = mainTodos.map((todoItem) => {
      if (id === todoItem.id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });
    setMainTodos(updatedTodoItem);
  };

  // For deleting the task
  const deleteTodoItem = (id) => {
    const remainingTodos = mainTodos.filter((todoItem) => id !== todoItem.id);
    setMainTodos(remainingTodos);
  };

  // For editing the task
  const editTodoItemName = (id, newName) => {
    const updatedTodoItem = mainTodos.map((todoItem) => {
      if (id === todoItem.id) {
        return { ...todoItem, name: newName };
      }
      return todoItem;
    });
    setMainTodos(updatedTodoItem);
  };

  // Counting the todos
  const tasksNoun = mainTodos.length !== 1 ? "tasks" : "task";
  const headingText = `${mainTodos.length} ${tasksNoun} remaining`;

  return (
    <div className="container">
      <Header />
      <NewTodoForm addNewTodoItem={addNewTodoItem} />
      <TodoList
        todos={mainTodos}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTodoItem={deleteTodoItem}
        editTodoItemName={editTodoItemName}
        headingText={headingText}
      />
      <Footer />
    </div>
  );
};

export default App;
