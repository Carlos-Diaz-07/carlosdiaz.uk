import React, { useState } from 'react';
import { motion } from "framer-motion"
import {
  Navbar, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem
} from 'reactstrap';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => {
    if (window.innerWidth < 768) {
      setIsNavOpen(!isNavOpen);
    }
  }

  return (
    <Navbar expand="md" className="sticky-top">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.75, duration: 1, type: "tween" }}
      >
        <NavbarBrand href="#first-section">
          <img src='assets/images/whole-logo.svg' alt='Carlos Diaz portfolio' />
        </NavbarBrand>
      </motion.div>
      <NavbarToggler className="fa fa-bars" onClick={() => setIsNavOpen(!isNavOpen)} />
      <Collapse isOpen={isNavOpen} navbar className="justify-content-end">
        <Nav
          navbar
          fill
        >
          <NavItem>
            <NavLink href="#about-me-section" onClick={closeNav}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#work-section" onClick={closeNav} >
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact-me-section" onClick={closeNav}>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>

    </Navbar>
  )
}
