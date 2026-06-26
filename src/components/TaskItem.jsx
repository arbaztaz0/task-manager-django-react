import { Link } from 'react-router-dom';

const STATUS_LABELS = {
  pending:     'Pending',
  in_progress: 'In Progress',
  completed:   'Completed',
};

export default function TaskItem({ task }) {
  function formatDate(iso) {
    if (!iso) return null;
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  }

  return (
    <Link to={`/tasks/${task.id}`} className="task-card-link">
      <div className="task-card">
        <p className="task-title">{task.title}</p>

        {task.description && (
          <p className="task-description">{task.description}</p>
        )}

        <div className="task-meta">
          <span className={`status-badge status-${task.status}`}>
            {STATUS_LABELS[task.status] ?? task.status}
          </span>

          {task.due_date && (
            <span className="task-due">Due: {formatDate(task.due_date)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
