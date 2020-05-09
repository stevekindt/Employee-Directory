import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";
function Header() {
  return (
    <Jumbotron className="header">
      <h1>Employee Directory</h1>
      <p>Search for an employee to find contact information.</p>
    </Jumbotron>
  );
}

export default Header;
