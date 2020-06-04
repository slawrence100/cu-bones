import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function Members() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Members"
            desc="The Current & Past Bones and Tones" />
          <article>
            <p>Nothing to see here yet...</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Members;