import React, { Component } from 'react';

class BlogTitle extends Component {
  constructor(props) {
    super(props);
    this.styleName = props.styleName
  }
  render() {
    return (
        <h3 className={this.styleName}>{this.props.children}</h3>
    );
  }
}

export default BlogTitle
