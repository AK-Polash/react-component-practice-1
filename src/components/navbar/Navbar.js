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

            <Lists>
              <ListItem title="Home" url="#" />
              <ListItem title="About" url="#" />
              <ListItem title="Query" url="#" />
              <ListItem title="Contact" url="#" />
            </Lists>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
