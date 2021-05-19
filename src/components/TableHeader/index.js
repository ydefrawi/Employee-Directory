import React from "react";
import "./style.css";

function TableHeader (props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </table>
    );
  }


export default TableHeader;