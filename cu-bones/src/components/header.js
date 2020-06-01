import React from 'react';

class Header extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    // TODO implement
    return (
      <div class="header">
        <h1>
          {this.props.title}
        </h1>
        <h5>
          {this.props.desc}
        </h5>
      </div>

    );
  }
}

export default Header;