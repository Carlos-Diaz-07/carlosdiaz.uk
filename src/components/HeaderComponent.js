import React, { Component } from "react";
import {
  LogoSpinner
} from "./LogoSpinnerComponent";
import {
  Navbar, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem
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
      <Navbar expand="md" className="sticky-top">
        <NavbarBrand>
          <LogoSpinner />
        </NavbarBrand>
        <NavbarToggler className="fa fa-bars" onClick={this.toggleNav} />
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
