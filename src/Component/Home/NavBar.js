import React, { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import Cartp from "./Cartp";
import { ContextAPI } from "../../Store/ContextAPI";

const NavBar = () => {
  const ctx = useContext(ContextAPI);
  let noItem = 0;
  ctx.items.forEach((item) => {
    noItem++;
  });
  return (
    <div>
      <section>
        <Navbar
          className=" d-flex justify-content-around fw-bold border-bottom border-white border-3"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="text-white w-100 d-flex justify-content-around">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink to='/about'>About</NavLink>

            <Cartp />
            <p
              style={{
                color: "white",
                padding: "2 px",
                backgroundColor: "cornflowerblue",
                borderRadius: "100%",
              }}
            >
              {noItem}
            </p>
          </Nav>
        </Navbar>
      </section>
    </div>
  );
};

export default NavBar;
