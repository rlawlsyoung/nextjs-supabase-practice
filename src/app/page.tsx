"use client";

import TodoForm from "@/components/TodoForm";
import TodoSection from "@/components/TodoSection";
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

  const uncompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: false } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-gray-50">
        <TodoForm input={input} setInput={setInput} addTodo={addTodo} />
        <TodoSection
          todos={todos}
          completeTodo={completeTodo}
          uncompleteTodo={uncompleteTodo}
        />
      </div>
    </div>
  );
}
