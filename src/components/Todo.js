import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>{this.props.todo} <button id={this.props.id} onClick={this.props.moveTodo}>Done</button></li>
    );
  }
}

export default Todo;