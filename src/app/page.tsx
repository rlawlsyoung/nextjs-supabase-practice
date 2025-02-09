"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        complete: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, complete: true } : todo))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Todo App</h1>
      <div className="w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={addTodo}
            className="w-full bg-blue-500 text-white p-2 rounded mb-4"
          >
            Add
          </button>
        </form>

        <h2 className="text-2xl font-semibold mb-2">Todos</h2>
        <ul className="mb-4">
          {todos
            .filter((todo) => !todo.complete)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-2 border-b border-gray-300"
              >
                {todo.text}
                <button
                  onClick={() => completeTodo(todo.id)}
                  className="bg-green-500 text-white p-1 rounded"
                >
                  Complete
                </button>
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Completed</h2>
        <ul>
          {todos
            .filter((todo) => todo.complete)
            .map((todo) => (
              <li key={todo.id} className="p-2 border-b border-gray-300">
                {todo.text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
