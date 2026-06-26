import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchTask, updateTask, deleteTask } from '../api/tasks';
import TaskForm from '../components/TaskForm';

const STATUS_LABELS = {
  pending:     'Pending',
  in_progress: 'In Progress',
  completed:   'Completed',
};

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function TaskDetailPage() {
  const { id }     = useParams();
  const navigate   = useNavigate();

  const [task,    setTask]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => { loadTask(); }, [id]);

  async function loadTask() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTask(id);
      setTask(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(formData) {
    await updateTask(id, formData);
    setEditing(false);
    await loadTask();
  }

  async function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this task? This cannot be undone.')) return;
    try {
      await deleteTask(id);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <p>Loading task...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="error-banner">
          <strong>Error:</strong> {error}
        </div>
        <Link to="/" className="back-link">← Back to tasks</Link>
      </div>
    );
  }

  if (!task) return null;

  return (
    <div>
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>

        {!editing && (
          <div className="detail-actions">
            <button
              className="btn btn-secondary"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {editing ? (
        <TaskForm
          task={task}
          onSave={handleUpdate}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <div className="detail-card">
          <p className="detail-title">{task.title}</p>

          <div className="detail-field">
            <p className="detail-label">Status</p>
            <span className={`status-badge status-${task.status}`}>
              {STATUS_LABELS[task.status] ?? task.status}
            </span>
          </div>

          <div className="detail-field">
            <p className="detail-label">Description</p>
            <p className="detail-value">{task.description || '—'}</p>
          </div>

          <div className="detail-field">
            <p className="detail-label">Created</p>
            <p className="detail-value">{formatDate(task.create_date)}</p>
          </div>

          <div className="detail-field">
            <p className="detail-label">Due Date</p>
            <p className="detail-value">{formatDate(task.due_date)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
