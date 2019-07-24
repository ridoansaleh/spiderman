import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list-container">
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
