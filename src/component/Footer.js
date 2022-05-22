import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container">
      <NavLink to="/" exact={true} activeClassName="active">
        <p>1</p>
      </NavLink>
      <NavLink to="/two" exact={true} activeClassName="active">
        <p>2</p>
      </NavLink>
    </footer>
  );
}

export default Footer