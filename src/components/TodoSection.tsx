import { Todo } from "@/app/page";

interface TodoSectionProps {
  todos: Todo[];
  completeTodo: (id: string) => void;
  uncompleteTodo: (id: string) => void;
}

export default function TodoSection({
  todos,
  completeTodo,
  uncompleteTodo,
}: TodoSectionProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold my-3">Todos</h2>
      <ul className="flex flex-col gap-[8px]">
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-md mb-2"
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
      <h2 className="text-2xl font-semibold my-3">Completed</h2>
      <ul className="flex flex-col gap-[8px]">
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-md mb-2"
            >
              {todo.text}
              <button
                onClick={() => uncompleteTodo(todo.id)}
                className="bg-yellow-500 text-white p-1 rounded"
              >
                Undo
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
