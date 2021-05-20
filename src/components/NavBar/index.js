import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light nav">
        <div className="container-fluid">
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleChange} />
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;