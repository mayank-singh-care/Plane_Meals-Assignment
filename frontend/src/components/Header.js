import React from "react";
import Auth from "./Auth";
import "./Header.css";

function Header() {
  return (
    <div className="navabar">
      <h1>Airplane Meals</h1>
      <Auth />
    </div>
  );
}

export default Header;
