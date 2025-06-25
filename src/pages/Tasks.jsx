import { useState, useEffect } from 'react';
import TaskInput from '../components/Taskinput';
import TaskItem from '../components/Taskitem';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  // Fetch initial tasks from API on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
        const data = await res.json();
        const formatted = data.map(task => ({
          id: task.id,
          title: task.title,
          completed: task.completed
        }));
        setTasks(formatted);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    };

    fetchTasks();
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: input, completed: false }
    ]);
    setInput('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-100 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Your Tasks</h1>

        <TaskInput
          input={input}
          setInput={setInput}
          handleAddTask={handleAddTask}
        />

        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              handleDelete={handleDeleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;