import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About.js';
import HearUs from './pages/HearUs.js';
import Home from './pages/Home.js';
import Members from './pages/Members.js';
import Quotes from './pages/Quotes.js';
import SeeUs from './pages/SeeUs.js';
import Traditions from './pages/Traditions.js';
import Acknowledgements from './pages/Acknowledgements.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/hearus" component={HearUs} />
        <Route path="/" component={Home} exact />
        <Route path="/members" component={Members} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/seeus" component={SeeUs} />
        <Route path="/traditions" component={Traditions} />
        <Route path="/acknowledgements" component={Acknowledgements} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
