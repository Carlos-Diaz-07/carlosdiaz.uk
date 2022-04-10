import React, { useState } from 'react';
import {
  LogoSpinner
} from "./LogoSpinnerComponent";
import {
  Navbar, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem
} from 'reactstrap';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

    return (
      <Navbar expand="md" className="sticky-top">
        <NavbarBrand>
          <LogoSpinner />
        </NavbarBrand>
        <NavbarToggler className="fa fa-bars" onClick={() => setIsNavOpen( !isNavOpen )} />
        <Collapse isOpen={isNavOpen} navbar className="justify-content-end">
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
