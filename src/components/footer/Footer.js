import React from "react";
import Lists from "../lists/Lists";
import ListItem from "../listItem/ListItem";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <Lists>
            <ListItem title="About" url="#" />
            <ListItem title="Query" url="#" />
          </Lists>
        </div>
      </div>
    </>
  );
};

export default Footer;
