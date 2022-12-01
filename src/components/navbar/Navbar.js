import React from "react";
import ListItem from "../listItem/ListItem";
import Lists from "../lists/Lists";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="inner__nav">
            <div>
              <a className="logo" href="#">
                LoGo
              </a>
            </div>

            <Lists class="lists">
              <ListItem clas="list" title="Home" url="#" />
              <ListItem clas="list" title="About" url="#" />
              <ListItem clas="list" title="Query" url="#" />
              <ListItem clas="list" title="Contact" url="#" />
            </Lists>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
