import React, { Component } from 'react';

class BlogText extends Component {
  render() {
    return (
    <p class="card-text">{this.props.children}</p>
    );
  }
}

export default BlogText
