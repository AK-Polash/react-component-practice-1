import React from "react";
import "./listItem.css";

const ListItem = ({ clas, title, url }) => {
  return (
    <>
      <li>
        <a className={clas} href={url}>
          {title}
        </a>
      </li>
    </>
  );
};

export default ListItem;
