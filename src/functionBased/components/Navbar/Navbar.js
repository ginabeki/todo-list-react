import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle} type="button">
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#000', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''} menu`}>
        <li>
          <Link
            to="/"
            className="nav-link"
            onClick={() => closeMenu()}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => closeMenu()}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
