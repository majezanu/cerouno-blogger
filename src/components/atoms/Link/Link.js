import React, { Component } from 'react';

class Link extends Component {
    constructor(props) {
        super(props);
        this.href = props.href;
        this.styleName = props.styleName;
    }
  render() {
    return (
        <a href={this.href} className={this.styleName}>{this.props.children}</a>
    );
  }
}

export default Link