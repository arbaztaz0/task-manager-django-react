import { useState, useEffect } from 'react';
import { fetchTasks } from '../api/tasks';
import TaskList from '../components/TaskList';

export default function HomePage() {
  const [tasks,   setTasks]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => { loadTasks(); }, []);

  async function loadTasks() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="page-title">All Tasks</h2>

      {error && (
        <div className="error-banner">
          <strong>Error:</strong> {error}
          <button className="error-close" onClick={() => setError(null)}>✕</button>
        </div>
      )}

      {loading ? (
        <div className="loading">
          <div className="spinner" />
          <p>Loading tasks...</p>
        </div>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}
