import React from "react";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import Cartp from "./Cartp";



const NavBar = () => {
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            <Cartp/>
          </Nav>
        </Navbar>
      </section>
    </div>
  );
};

export default NavBar;
