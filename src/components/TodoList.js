import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  state = {
    selectedTask: -1,
  };

  handleCheckTask = e => {
    if (this.state.selectedTask == e.target.value) {
      this.setState({ selectedTask: -1 }, () => {
        this.props.setSelectedTask(null);
      });
    } else {
      this.setState({ selectedTask: parseInt(e.target.value) }, () => {
        const task = this.props.todos.filter(todo => todo.id == this.state.selectedTask);
        this.props.setSelectedTask(task[0]);
        this.props.handleEditClick(false);
      });
    }
  };

  render() {
    return (
      <ul className="todo-list-container">
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            selectedTask={this.state.selectedTask}
            handleCheckTask={this.handleCheckTask}
          />
        ))}
      </ul>
    );
  }
}
