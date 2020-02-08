import React, { Component } from 'react';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
class SubscribeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {isSubscribed: false};

    this.subscribe = this.subscribe.bind(this);
  }
  subscribe() {
    this.setState(state => ({
      isSubscribed: true
    }));
  }
  renderSuscribeMsg() {
    if(this.state.isSubscribed) {
      return (
        <div className="row">
          <div className="col align-self-center text-white">
              <h6>¡Gracias por suscribirse!</h6>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col align-self-center ">
                    <TextInput type={`email`}></TextInput>
                    <Button styleName={`btn btn-primary`} clickAction={this.subscribe}>Suscríbete</Button>
                </div>
            </div>
            {
              this.renderSuscribeMsg()
            }
        </div>
        
    );
  }
}

export default SubscribeInput
