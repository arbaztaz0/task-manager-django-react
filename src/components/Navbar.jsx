import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        Task Manager
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/tasks/new"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          ✚ Create Task
        </NavLink>

        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          📝 Notes
        </NavLink>
      </div>
    </nav>

    
  );
}
