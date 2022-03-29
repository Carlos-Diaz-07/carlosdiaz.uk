import React, { Component } from "react";
import {
  Navbar, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false,
    };

  }

  toggleNav() {
    console.log("happens" + this.state.isNavOpen);
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand>
          <img src='assets/images/logo.svg' alt='Carlos Diaz portfolio' />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-end">
          <Nav
            navbar
            fill
          >
            <NavItem>
              <NavLink href="">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>
    )
  }
}

export default Header
