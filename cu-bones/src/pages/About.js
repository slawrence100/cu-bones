import React from 'react';
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNavbar from '../components/navbar.js'
import Text from '../components/text.js'
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
            <section>
              <h2>Purpose</h2>
              <p>
                To bring together individuals who enjoy music, marching, and need a social outlet to
                relieve the incredible stress that Cornell generates in all of its students. The bones
                encompass a broad range of personalities and qualities, united in brass and the ability
                to have a good time. While often it is said a bone at rest tends to stay at rest,
                paradoxically bones also are known for bowling, floor hockey, and kickball on the arts quad.
                We are governed by no simple equation. Rather, we are an extended family.
                We are 15-30 enthusiastic, dedicated, fun-loving Cornell students who happen to play
                trombone (henceforth referred to as <Text bold>BONE</Text>) or baritone
                (similarly <Text bold>TONE</Text>).
              </p>
            </section>
            <section>
              <h2>The Section and the BRMB</h2>
              <p>
                Officially, the section is a subset of the Cornell University Big Red Marching Band.
                The BRB is known as "The Only REAL Marching Band in the Ivy League" due to the fact
                that we are the only non-"scatter" band of the Ivies. That's not to say that we are
                more serious than the others, just that we like to look like we know what we are doing.
                In a world of scatter bands and competitive bands, the BRB and Da Bones have a balance:
                the practice and dedication to look and sound good, with the flexibility to maintain
                academic priorities. And sombreros.
            </p>
            </section>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default About;