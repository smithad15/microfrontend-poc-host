import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to="/">Host</NavLink>
    <NavLink to="/app1">App 1</NavLink>
    <NavLink to="/app2">App 2</NavLink>
  </nav>
);

export default Header;
