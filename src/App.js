import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoUpdate from './components/TodoUpdate';
import TodoList from './components/TodoList';
import './css/MainStyle.css';
import { fetchAllTodos, saveTask } from './redux/creators';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    return (
      <div className="todo-container">
        <TodoInput todos={this.props.todos.data} saveTask={this.props.saveTask} />
        <TodoUpdate />
        <TodoList todos={this.props.todos.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = {
  fetchAllTodos,
  saveTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
