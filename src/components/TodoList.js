import React, { Component } from 'react';

class TodoList extends Component {
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
    return (
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {this.props.todos.map(todo => {
            return (
              <li
                key={todo.id}
                style={todo.status === 'completed' ? { textDecoration: 'line-through' } : {}}
              >
                <input
                  type="checkbox"
                  value={todo.id}
                  checked={todo.id === this.state.selectedTask}
                  onChange={this.handleCheckTask}
                />{' '}
                {todo.task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
