import React from "react";
import "./style.css";


function TableBody (props) {
    return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
    </tr>
    );
  }


export default TableBody;