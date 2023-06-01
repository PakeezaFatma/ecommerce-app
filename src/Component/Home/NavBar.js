import React from "react";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import CartB from "./CartB";

const NavBar = () => {
  return (
    <div>
      <section>
        <Navbar
          className="sticky-top d-flex justify-content-around fw-bold border-bottom border-white border-3"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <CartB/>
          </Nav>
        </Navbar>
      </section>
    </div>
  );
};

export default NavBar;
