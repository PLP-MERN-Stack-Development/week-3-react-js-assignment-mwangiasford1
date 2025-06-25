import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer className="text-center text-sm text-gray-600 py-4 border-t bg-gradient-to-r from-slate-100 to-slate-200 mt-8">
        © 2025 Task Manager. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;