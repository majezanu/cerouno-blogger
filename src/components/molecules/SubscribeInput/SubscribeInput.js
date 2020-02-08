import React, { Component } from 'react';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
class SubscribeInput extends Component {
  render() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col align-self-center ">
                    <TextInput type={`email`}></TextInput>
                    <Button styleName={`btn btn-primary`}>Suscríbete</Button>
                </div>
                
            </div>
        </div>
        
    );
  }
}

export default SubscribeInput
