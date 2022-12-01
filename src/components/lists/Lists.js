import React from "react";
import "./lists.css";

const Lists = (props) => {
  return <ul className={props.class}> {props.children} </ul>;
};

export default Lists;
