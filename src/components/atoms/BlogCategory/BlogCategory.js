import React, { Component } from 'react';
import PropTypes from 'prop-types';
class BlogCategory extends Component {
    constructor(props) {
        super(props);
        this.styleName = props.styleName;
    }
  render() {
    return (
        <label className={this.styleName}>{this.props.children}</label>
    );
  }
}

BlogCategory.propTypes = {
  styleName: PropTypes.string
}
export default BlogCategory
