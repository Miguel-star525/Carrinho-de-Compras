import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopCart</Link>
      <Link to="/cart" className="cart-link">
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;