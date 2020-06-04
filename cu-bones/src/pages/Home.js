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
    <Container className="full-height" fluid>
      <Row className="full-height">
        <SideNavbar />
        <Col class="blue">
          <Header title="Da Bones"
            desc="The Trombones & Baritones of the Cornell University Marching Band" />
          <article>
            <p>Greetings!</p>
            <p>We are the trombone and baritone players of the Cornell University Big Red Bands.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non lectus orci. Nullam id sapien consectetur, malesuada eros eget, ullamcorper nibh. Sed tincidunt et dui nec rutrum. Nullam mollis ornare nibh, at accumsan dolor. Maecenas tempor eros non dapibus molestie. Sed aliquam laoreet volutpat. Nunc id hendrerit magna. Duis ut molestie risus. Maecenas fermentum leo vel est vehicula accumsan. Nunc hendrerit libero vitae finibus sodales.
            </p><p>
              Morbi sit amet sem pellentesque, fringilla est et, ornare orci. Maecenas ornare elit ut vehicula bibendum. Nulla facilisi. Sed vitae eleifend lorem, quis rhoncus lectus. Nam eget velit accumsan tortor vehicula fermentum. Morbi sit amet semper odio, ut egestas orci. Morbi sapien nulla, condimentum in augue nec, pellentesque facilisis massa. Vivamus sit amet dolor id nisl luctus blandit.
              </p><p>
              Nulla pulvinar sit amet purus sit amet egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat massa felis, quis viverra sem pretium sed. Cras est odio, faucibus at fringilla sit amet, elementum quis risus. Ut eget venenatis dui, in ultricies turpis. Vestibulum elementum justo non massa aliquet, id imperdiet justo efficitur. Curabitur malesuada tempus erat, a faucibus dolor mattis a. Vestibulum nec enim porttitor, lobortis lacus ac, finibus tellus. Maecenas a molestie quam. Maecenas sagittis enim id maximus mattis.
              </p><p>
              Nunc turpis velit, fermentum at dignissim quis, dapibus in leo. Proin ultrices ligula felis, non aliquam neque molestie vel. Curabitur felis mi, gravida quis leo vel, porttitor bibendum diam. Mauris feugiat ullamcorper augue, vel maximus orci tempor sit amet. Nulla fringilla, erat eget sollicitudin ullamcorper, elit libero convallis augue, nec volutpat enim nibh sit amet mauris. Suspendisse id tristique augue, sed dictum magna. Nam mattis nulla metus, mollis elementum massa rhoncus eu. Praesent accumsan pharetra lectus, non euismod nulla sodales eget.
              </p><p>
              Maecenas id lacinia erat. Duis tristique ornare felis, vel ultrices justo porttitor ac. Quisque auctor, mauris non sodales viverra, augue risus tempus tortor, at congue turpis nulla blandit dolor. Phasellus iaculis laoreet ipsum id placerat. Mauris sollicitudin leo vulputate, bibendum leo aliquam, vehicula odio. Curabitur eleifend hendrerit turpis, vitae commodo odio elementum eu. Aliquam erat volutpat. Donec mattis nisi sit amet luctus finibus.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
