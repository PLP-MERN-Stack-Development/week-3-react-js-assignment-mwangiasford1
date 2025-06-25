import React from 'react';

const TaskItem = ({ task, toggleComplete, handleDelete }) => (
  <li className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="form-checkbox text-emerald-600 w-5 h-5"
      />
      <span
        className={`text-lg ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {task.title}
      </span>
    </div>
    <button
      onClick={() => handleDelete(task.id)}
      className="text-red-500 text-xl hover:text-red-600 transition"
    >
      ❌
    </button>
  </li>
);

export default TaskItem;
