"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import TodoSection from "@/components/TodoSection";
import TodoForm from "@/components/TodoForm";

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

  const uncompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: false } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Todo App</h1>
        <div className="w-full max-w-md">
          <TodoForm input={input} setInput={setInput} addTodo={addTodo} />
          <TodoSection
            todos={todos}
            completeTodo={completeTodo}
            uncompleteTodo={uncompleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
