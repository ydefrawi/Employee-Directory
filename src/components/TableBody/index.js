import React from "react";
import "./style.css";


function TableBody (props) {
    return (
    <tr>
      <th scope="row" id={props.id} >{props.id}</th>
      <td><img height = " 30px" src={props.image} alt={props.name} /></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      <td>{props.phone}</td>
    </tr>
    );
  }


export default TableBody;