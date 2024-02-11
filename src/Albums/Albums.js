import "./Albums.css";

import React from "react";

function Albums(props) {
  return (
    <div className="container">
      <div className="title">{props.props.title}</div>
      <br></br>
      <div className="userId">User ID : {props.props.userId}</div>
    </div>
  );
}

export default Albums;
