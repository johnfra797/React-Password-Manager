import React from "react";
import "./style.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Password Manager</h1>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
