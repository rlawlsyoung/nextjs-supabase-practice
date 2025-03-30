"use client";

import TodoForm from "@/components/TodoForm";
import TodoSection from "@/components/TodoSection";
import { useState } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "sdaaddsdsd-dsda-dds-sdadd",
      text: "할일 1",
      completed: false,
    },
  ]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const completedTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const uncompletedTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
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
          completeTodo={completedTodo}
          uncompleteTodo={uncompletedTodo}
        />
      </div>
    </div>
  );
}
