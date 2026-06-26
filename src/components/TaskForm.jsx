import { useState } from 'react';

const STATUSES = [
  { value: 'pending',     label: 'Pending' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed',   label: 'Completed' },
];

export default function TaskForm({ task, onSave, onCancel }) {
  const isEdit = Boolean(task);

  const [title,       setTitle]       = useState(task?.title       ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [status,      setStatus]      = useState(task?.status      ?? 'pending');
  const [dueDate,     setDueDate]     = useState(
    task?.due_date ? task.due_date.slice(0, 16) : ''
  );
  const [submitting, setSubmitting] = useState(false);
  const [formError,  setFormError]  = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) { setFormError('Title is required.'); return; }

    const payload = { title: title.trim(), description, status };
    if (dueDate) payload.due_date = new Date(dueDate).toISOString();

    try {
      setFormError(null);
      setSubmitting(true);
      await onSave(payload);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="task-form-overlay">
      <h2>{isEdit ? 'Edit Task' : 'New Task'}</h2>

      {formError && (
        <div className="error-banner" style={{ marginBottom: '1rem' }}>
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Task title"
            disabled={submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Optional description"
            disabled={submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={e => setStatus(e.target.value)}
            disabled={submitting}
          >
            {STATUSES.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="due_date">Due Date</label>
          <input
            id="due_date"
            type="datetime-local"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            disabled={submitting}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? 'Saving...' : isEdit ? 'Update Task' : 'Create Task'}
          </button>
        </div>
      </form>
    </div>
  );
}
