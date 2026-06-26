import { useNavigate } from 'react-router-dom';
import { createTask } from '../api/tasks';
import TaskForm from '../components/TaskForm';

export default function CreateTaskPage() {
  const navigate = useNavigate();

  async function handleSave(data) {
    await createTask(data);
    navigate('/');
  }

  return (
    <div>
      <h2 className="page-title">New Task</h2>
      <TaskForm
        task={null}
        onSave={handleSave}
        onCancel={() => navigate('/')}
      />
    </div>
  );
}
