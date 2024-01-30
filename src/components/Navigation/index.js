import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UseSelector, useSelector } from "react-redux";

const Navigation = () => {
  const cartProducts = useSelector((store) => store.cart);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            React-Redux
          </Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Products
              </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>
                  My Bag {cartProducts.length}
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
