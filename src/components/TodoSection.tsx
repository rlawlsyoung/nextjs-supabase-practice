interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

interface TodoSectionProps {
  todos: Todo[];
  completeTodo: (id: number) => void;
  uncompleteTodo: (id: number) => void;
}

export default function TodoSection({
  todos,
  completeTodo,
  uncompleteTodo,
}: TodoSectionProps) {
  return (
    <>
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
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border-b border-gray-300"
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
