import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header data-testid="menuContainer">
      <NavLink activeClassName="selected" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" to="/toggle">
        Toggle
      </NavLink>
      <NavLink activeClassName="selected" to="/change">
        Change Name
      </NavLink>
      <NavLink activeClassName="selected" to="/counter">
        Counter
      </NavLink>
    </header>
  );
};

export default Menu;
