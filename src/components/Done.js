import React, { Component } from 'react';

class Done extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.done} <button id={this.props.id} onClick={this.props.deleteDone}>Delete</button></li>
    );
  }
}

export default Done;