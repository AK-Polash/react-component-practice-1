import React from "react";
import "./lists.css";

const Lists = (props) => {
  return <ul className="lists"> {props.children} </ul>;
};

export default Lists;
