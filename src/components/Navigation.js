import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : null)}>
            acceuil
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : null)}
        >
          à propos
        </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
