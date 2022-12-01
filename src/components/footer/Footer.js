import React from "react";
import Lists from "../lists/Lists";
import ListItem from "../listItem/ListItem";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <Lists class="foot_lists">
            <ListItem clas="foot_list" title="About" url="#" />
            <ListItem clas="foot_list" title="Query" url="#" />
          </Lists>
        </div>
      </div>
    </>
  );
};

export default Footer;
