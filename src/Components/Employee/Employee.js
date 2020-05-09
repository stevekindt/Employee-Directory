import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.first_name}
          </li>
          <li>
            <strong>Last Name:</strong> {props.last_name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Employee;
