import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage';
import './App.css';
import NotesPage from "./pages/NotesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/tasks/new"  element={<CreateTaskPage />} />
          <Route path="/tasks/:id"  element={<TaskDetailPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
