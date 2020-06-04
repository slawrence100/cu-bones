import React from 'react';
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function Traditions() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Traditions"
            desc="This is what we do" />
          <article>
            <p>Nothing to see here yet...</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Traditions;