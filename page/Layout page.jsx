import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Optional: Include CSS for styling

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Social Learning System</h1>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-item">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-item">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Social Learning and Networking System. All rights reserved.</p>
      </footer>
    </>
  );
}
