import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header data-testid="menuContainer">
      <h1>Menu</h1>
      <Link to="/toggle">Toggle</Link>
      <Link to="/change">Change Name</Link>
      <Link to="/counter">Counter</Link>
    </header>
  );
};

export default Menu;
