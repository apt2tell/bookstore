import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import '../App.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <>
      <nav className="nav-bar">
        <h1>Bookstore</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>
                {link.text }
              </Link>
            </li>
          ))}
        </ul>
        <FaRegUserCircle
          className="user-icon"
        />
      </nav>
    </>
  );
};

export default NavBar;
