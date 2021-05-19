import React from "react";
import "./style.css";

function TableHeader (props) {
    return (
        <table className="table">
            <thead>
            </thead>
            <tbody>
                {props.children}
                </tbody>
        </table>
    );
  }


export default TableHeader;