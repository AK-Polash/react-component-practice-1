import React from "react";
import "./listItem.css";

const ListItem = ({ title, url }) => {
  return (
    <>
      <li>
        <a className="list" href={url}>
          {title}
        </a>
      </li>
    </>
  );
};

export default ListItem;
