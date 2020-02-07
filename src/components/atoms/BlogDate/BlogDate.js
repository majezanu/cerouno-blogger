import React, { Component } from 'react';
import PropTypes from 'prop-types';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
class BlogDate extends Component {
    
    constructor(props) {
        super(props);
        this.locale = props.locale;
        this.date = props.date.toLocaleDateString(this.locale, options);
    }
  render() {
    return (
        <label>{this.date}</label>
    );
  }
}

BlogDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}
export default BlogDate
