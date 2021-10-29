import React from "react";

const TopMenu = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav-area">
            <li>
              <button className="btn-login">login</button>
            </li>
            <li>
              <button className="btn-signup">signup</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TopMenu;
