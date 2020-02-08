import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.styleName = props.styleName;
        this.type = props.type;
    }
  render() {
    return (
        <input type={this.type} className={this.styleName}/>
    );
  }
}

export default TextInput
