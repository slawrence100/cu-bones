import React from 'react';

import '../css/textformats.css'

class Text extends React.Component {
  render() {
    return (
      <span className={
        (this.props.bold ? "bold" : "")
        + (this.props.italic ? "italic" : "")
        + (this.props.underline ? "underline" : "")
      }>
        {this.props.children}</span >
    );
  }
}

export default Text;