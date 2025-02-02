import React from 'react';

import logo from "./../img/xing-logotype.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
    <img
          alt=""
          src={logo}  
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        KroNix
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/dialogs">Messages</NavLink>
        <NavLink className="nav-link" to="/news">News</NavLink>
        <NavLink className="nav-link" to="/dialogss">Music</NavLink>
        <NavDropdown title="Settings" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
