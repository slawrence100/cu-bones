import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function About() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="About Us"
            desc="Who the heck are we anyway?" />
          <article>
            <p>Nothing to see here yet...</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default About;