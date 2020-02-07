import React, { Component } from 'react';
import Button from '../Button';
class BlogButton extends Component {

  render() {
    return (
        <Button styleName={`btn btn-primary`}>{this.props.children}</Button>
    );
  }
}

export default BlogButton
