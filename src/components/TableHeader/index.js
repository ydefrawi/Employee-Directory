import React from "react";
import "./style.css";

function TableHeader (props) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
            <thead>
            </thead>
            <tbody>
                {props.children}
                </tbody>
        </table>
        </div>
        
    );
  }


export default TableHeader;