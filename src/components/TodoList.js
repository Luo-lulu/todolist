import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./project.css";
import "antd/dist/antd.css";

import { Row, Col } from "antd";
function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TODOLOCAK")) || []
  );

  useEffect(() => {
    localStorage.setItem("TODOLOCAK", JSON.stringify(todos));
  }, [todos]);
  // console.log(JSON.parse(localStorage.getItem("TODOLOCAK")));
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removeArray = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArray);
  };

  const doneTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Row justify="center">
      <Col sm={20} md={16} className="todolist">
        <div className="title__text">What's gonna do ?</div>
        <TodoForm onSubmit={addTodo} />
        <TodoItem
          todos={todos}
          doneTodo={doneTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </Col>
    </Row>
  );
}

export default TodoList;
