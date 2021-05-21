import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light nav fade-in-image">
        <div className="container-fluid">
          <div className="d-flex">
            <input id="searchBox" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleChange} />
            <div id="navText">Filter by Name, Occupation, Location or Email!</div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NavBar;