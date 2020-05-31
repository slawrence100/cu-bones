import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      img: props.img
    }
  }

  render() {
    return (
      <div>
        <p>
          I'm a person named {this.props.name} with image at {this.props.img}
        </p>
      </div>
    );
  }
}

export default Person;