const BASE = 'http://localhost:8000/api/tasks';
const JSON_HEADERS = { 'Content-Type': 'application/json' };

export async function fetchTasks() {
  const res = await fetch(`${BASE}/`);
  if (!res.ok) throw new Error('Failed to load tasks.');
  return res.json();
}

export async function fetchTask(id) {
  const res = await fetch(`${BASE}/${id}/`);
  if (!res.ok) throw new Error('Task not found.');
  return res.json();
}

export async function createTask(data) {
  const res = await fetch(`${BASE}/`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}

export async function updateTask(id, data) {
  const res = await fetch(`${BASE}/${id}/`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE}/${id}/`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task.');
}




