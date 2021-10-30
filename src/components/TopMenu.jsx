import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-area">
            <li>
              <Link to="/login">
                <button className="btn-login">login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="btn-signup">signup</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TopMenu;
