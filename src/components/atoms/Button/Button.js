import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.styleName = props.styleName;
    }
  render() {
    return (
        <button className={this.styleName}>{this.props.children}</button>
    );
  }
}

export default Button
