import React from 'react';

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import bone_logo from '../img/bone-logo.jpg'

class SideNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.makePages = this.makePages.bind(this);
  }

  makePageName(name) {
    if (name === "Home") return "/";

    return name.toLowerCase().replace(" ", "");
  }

  makePage(name) {
    return (
      <Nav.Link href={this.makePageName(name)} className="nav-block" variant="light" > {name} </Nav.Link>
    )
  }

  makePages() {
    let pages_list = [
      "Home",
      "About",
      "Members",
      "Traditions",
      "Quotes",
      "See Us",
      "Hear Us",
      "Acknowledgements"
    ];
    return pages_list.map(name => {
      return this.makePage(name);
    });
  }

  render() {
    return (
      <Col md={2} className="full-height red navbar-container">
        <Image src={bone_logo} fluid />
        <br />
        <div class="full-width">
          <Navbar>
            <Nav className="flex-column full-width">
              {this.makePages()}
            </Nav>
          </Navbar>

        </div>

      </Col >
    );
  }
}

export default SideNavbar;