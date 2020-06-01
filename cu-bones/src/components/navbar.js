import React from 'react';

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import bone_logo from '../img/bone-logo.jpg'

class SideNavbar extends React.Component {

  render() {
    // TODO implement
    return (
      <Col sm={2} className="red">
        <Image src={bone_logo} fluid />
        <Navbar className="wide">
          <Nav>
            <Nav.Item>
              <Nav.Link href="../pages/about.js">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Col >
    );
  }
}

export default SideNavbar;