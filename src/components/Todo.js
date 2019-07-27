import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.status === 'completed' ? 'todo-item-done' : ''}>
        <input
          type="checkbox"
          id={`task-${todo.id}`}
          value={todo.id}
          checked={todo.id === this.props.selectedTask}
          onChange={this.props.handleCheckTask}
        />
        <label htmlFor={`task-${todo.id}`}>{todo.task}</label>
      </li>
    );
  }
}
