import TaskItem from './Taskitem';

function TaskList({ tasks, handleComplete, handleDelete }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          status={task.status}
          dueDate={task.dueDate}
          priority={task.priority}
          onComplete={() => handleComplete(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;