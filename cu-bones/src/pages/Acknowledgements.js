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
            <p>
              A long, long time ago, in a land far, far away, the elders of da bones, known as Olds,
              created the first Bone site. As you could imagine, t'was made in the early days of HTML.
              Bone inertia, however, left the site's design largely untouched. For a long time, da bones
              kept the site as is, viewing the <del>evil</del> antique technology with nostalga instead.
            </p>
            <p>
              And then came Syd. He was not known for much, besides cooking overly fancy stuff, writing code, and
              of course, playing <del>flute</del> bone. The dreaded COVID-19 caused many a bone to be stuck at home,
              and Syd figured he could use his time to make modern web pages. One GitHub repo later, this site was born.
            </p>
            <p>
              (oh, and he's still alive lol, using the past tense just sounded more story-like)
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Acknowledgements;