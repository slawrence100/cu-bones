import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'

import '../css/site.css';



function Home() {
  return (
    <Container className="screen" fluid>
      <Row>
        <SideNavbar />

        <Col class="blue">
          <Header title="Da Bones"
            desc="The Trombones of the Cornell University Marching Band" />
          <article>
            <p>Greetings!</p>
            <p>We are the trombone and baritone players of the Cornell University Big Red Bands.</p>
          </article>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Home;
