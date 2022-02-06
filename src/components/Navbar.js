import React from "react";
import ReactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={ReactLogo} alt="ReactLogo" className="nav--icon" />
      <h2 className="logo-text">ReactFacts</h2>
      <h3 className="logo-heading">React Course - Project 1</h3>
    </nav>
  );
}
