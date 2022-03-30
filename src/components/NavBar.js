import React from "react";
import {Navbar} from "react-bootstrap"
const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="top" style={{paddingLeft:"15px",color:"whitesmoke"}}>
          Infinite Scroll
      </Navbar>
    </div>
  );
};

export default NavBar;
