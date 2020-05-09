import React, { Component } from "react";
import employees from "../../EmployeeInfo.json";
import "./style.css";
import Employee from "../Employee/Employee";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees,
      filteredEmployees: [],
    };
  }
  filterList = (e) => {
    const filterTarget = e.target.value;
    let employeeList = this.state.employees;
    employeeList = employeeList.filter((i) => {
      let values = Object.values(i).join("").toLocaleLowerCase();
      return values.indexOf(filterTarget.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: employeeList });
  };

  render() {
    return (
      <div className="filter-list">
        <input
          className="search"
          type="text"
          placeholder="Search for an employee"
          onChange={this.filterList}
        />

        {this.state.filteredEmployees[0]
          ? this.state.filteredEmployees.map((employee) => (
              <Employee
                id={employee.id}
                first_name={employee.first_name}
                last_name={employee.last_name}
                department={employee.department}
                phone={employee.phone}
                email={employee.email}
              />
            ))
          : this.state.employees.map((employee) => (
              <Employee
                id={employee.id}
                first_name={employee.first_name}
                last_name={employee.last_name}
                department={employee.department}
                phone={employee.phone}
                email={employee.email}
              />
            ))}
      </div>
    );
  }
}

export default Search;
