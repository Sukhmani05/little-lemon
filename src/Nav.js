import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <img alt='logo'/>
        <li>Home</li>
        <li>About us</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Log In</li>
      </ul>
    </nav>
  );
};

export default Nav;