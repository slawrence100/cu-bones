import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'
import Quote from '../components/quote.js'
import '../css/site.css';



function Quotes() {
  return (
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Quotes"
            desc="A wise bone(head) once said..." />
          <article>
            <Quote author="Brian">
              Ayy, that's the... uhh...
              <br /><br />
              Fish!
              </Quote>
            <br />
            <Quote author="Brian">
              Who here knows about the Wario apparition?
            </Quote>
            <br />
            <Quote author="also Brian">
              Ah yes, my lower intestinal tract is just-<br />
              *hums minecraft music*<br />
              *immitates breaking blocks in minecraft and popping the items into his inventory*
            </Quote>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Quotes;