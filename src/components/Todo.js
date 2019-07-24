import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    selectedTask: -1,
  };

  handleCheckTask = e => {
    if (this.state.selectedTask == e.target.value) {
      this.setState({ selectedTask: -1 });
    } else {
      this.setState({ selectedTask: parseInt(e.target.value) });
    }
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.status === 'completed' ? 'todo-item-done' : ''}>
        <input
          type="checkbox"
          value={todo.id}
          checked={todo.id === this.state.selectedTask}
          onChange={this.handleCheckTask}
        />{' '}
        {todo.task}
      </li>
    );
  }
}
