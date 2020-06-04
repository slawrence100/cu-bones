import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function Acknowledgements() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Acknowledgements"
            desc="Who do we credit for this site?" />
          <article>
            <p>Nothing to see here yet...</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Acknowledgements;