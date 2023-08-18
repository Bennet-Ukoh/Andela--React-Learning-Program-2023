import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    color: "red",
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
        </ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/shoes">
            shoes
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/cart">
            car
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
