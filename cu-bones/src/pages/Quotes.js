import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function Quotes() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Quotes"
            desc="A wise bone once said..." />
          <article>
            <p>Nothing to see here yet...</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Quotes;