import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
  render() {
    return (
        <button>{this.text}</button>
    );
  }
}

export default Button
