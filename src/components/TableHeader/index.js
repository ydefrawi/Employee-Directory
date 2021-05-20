import React from "react";
import "./style.css";

function TableHeader (props) {
    return (
        <table className="table table-hover">
            <thead>
            </thead>
            <tbody>
                {props.children}
                </tbody>
        </table>
    );
  }


export default TableHeader;