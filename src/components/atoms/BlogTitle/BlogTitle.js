import React, { Component } from 'react';

class BlogTitle extends Component {
  render() {
    return (
        <h3 className="card-title">{this.props.children}</h3>
    );
  }
}

export default BlogTitle
