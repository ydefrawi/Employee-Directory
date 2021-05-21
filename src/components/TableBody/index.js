import React from "react";
import "./style.css";


function TableBody (props) {
  let dynamicURL=`https://www.google.com/search?q=${props.name}+Star+Trek`
    return (
    <tr>
      <th scope="row" id={props.id} >{props.id}</th>
      <td><img className="portraits" src={props.image} alt={props.name} /></td>
      <td><a href={dynamicURL} rel="noreferrer"target="_blank">{props.name}</a></td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      <td>{props.email}</td>
    </tr>
    );
  }


export default TableBody;