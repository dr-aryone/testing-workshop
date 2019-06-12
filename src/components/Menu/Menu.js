import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  padding: 1em;
  text-decoration: none;
  color: #1a1a1a;
  white-space: nowrap;

  &.${activeClassName} {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Menu = () => {
  return (
    <header data-testid="menuContainer">
      <StyledNavLink activeClassName={activeClassName} exact to="/">
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName={activeClassName} to="/toggle">
        Toggle
      </StyledNavLink>
      <StyledNavLink activeClassName={activeClassName} to="/change">
        Change Name
      </StyledNavLink>
      <StyledNavLink activeClassName={activeClassName} to="/counter">
        Counter
      </StyledNavLink>
    </header>
  );
};

export default Menu;
