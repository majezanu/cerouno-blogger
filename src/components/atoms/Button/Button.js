import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.styleName = props.styleName;
        this.handleClick = props.clickAction;
    }
  render() {
    return (
        <button className={this.styleName} onClick={this.handleClick}>{this.props.children}</button>
    );
  }
}

export default Button
