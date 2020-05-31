import React from 'react';
import Person from '../components/person.js'
import Footer from '../components/footer.js'
import '../css/App.css';

function Home() {
  return (
    <div>
      <Person name="Syd" img="syd-img" />
      <Person name="Puffle" img="puffle-img" />
      <Footer />
    </div>

  );
}

export default Home;
