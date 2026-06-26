import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="task-empty">
        <p>No tasks yet.</p>
        <p>
          Click <Link to="/tasks/new" style={{ color: '#4f46e5', fontWeight: 600 }}>✚ Create Task</Link> in the navbar to add one.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
