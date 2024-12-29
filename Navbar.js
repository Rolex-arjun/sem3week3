import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>E-Commerce</h1>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default Navbar;
