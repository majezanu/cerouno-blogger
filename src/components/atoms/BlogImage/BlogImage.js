import React, { Component } from 'react';
import PropTypes from 'prop-types';
class BlogImage extends Component {
    constructor(props) {
        super(props);
        this.src = props.image.src;
        this.alt = props.image.alt;
        this.styleName = props.styleName;
    }
  render() {
    return (
        <img className={this.styleName} src={this.src} alt={this.alt}/>
    );
  }
}

BlogImage.propTypes = {
  image : PropTypes.object.isRequired
}
export default BlogImage
