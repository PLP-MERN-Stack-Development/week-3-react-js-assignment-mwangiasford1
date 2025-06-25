const TaskInput = ({ input, setInput, handleAddTask }) => (
  <div className="mb-6 flex flex-col sm:flex-row items-center gap-3">
    <input
      type="text"
      value={input}
      placeholder="New task..."
      onChange={(e) => setInput(e.target.value)}
      className="w-full sm:w-auto flex-grow border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
    />
    <button
      onClick={handleAddTask}
      className="bg-emerald-600 text-white px-6 py-2 rounded-md shadow hover:bg-emerald-700 transition"
    >
      Add
    </button>
  </div>
);

export default TaskInput;