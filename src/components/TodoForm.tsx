interface TodoFormProps {
  input: string;
  setInput: (value: string) => void;
  addTodo: () => void;
}

export default function TodoForm({ input, setInput, addTodo }: TodoFormProps) {
  return (
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
  );
}
