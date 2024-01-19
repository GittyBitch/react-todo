import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid to generate unique keys
import './App.css';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (newTodo.trim() === '') return; // Prevents adding empty todos
    setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>To-Do Liste</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Hinzufügen</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id} // Using unique id as key
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)} // Using id to toggle todo
            />
            {todo.completed && (
              <button onClick={() => removeTodo(todo.id)}>Löschen</button> // Using id to remove todo
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

