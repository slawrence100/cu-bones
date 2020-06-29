import React from 'react';
import Card from 'react-bootstrap/Card'
import Text from 'react';

import '../css/site.css'

class Quote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // TODO implement
    return (
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0 ">
            <p className="newlineable">
              {this.props.children}
            </p>
            <footer className="blockquote-footer">
              {this.props.author}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}

export default Quote;