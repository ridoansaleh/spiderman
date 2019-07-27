import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './components/TodoInput';
import TodoUpdate from './components/TodoUpdate';
import TodoList from './components/TodoList';
import './css/MainStyle.css';
import { fetchAllTodos, saveTask, completeTask, resetTask } from './redux/creators';
import { setSelectedTask } from './redux/actions';

class App extends Component {
  state = {
    isEditOn: false,
  };

  componentDidMount() {
    this.props.fetchAllTodos();
  }

  handleEditClick = val => {
    this.setState({
      isEditOn: val,
    });
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        <TodoInput
          todos={todos.data}
          saveTask={this.props.saveTask}
          selectedTask={todos.selectedTask}
          isEditOn={this.state.isEditOn}
        />
        <TodoUpdate
          todos={todos.data}
          selectedTask={todos.selectedTask}
          handleEditClick={this.handleEditClick}
          completeTask={this.props.completeTask}
          resetTask={this.props.resetTask}
        />
        <TodoList
          todos={todos.data}
          setSelectedTask={this.props.setSelectedTask}
          handleEditClick={this.handleEditClick}
        />
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
  setSelectedTask,
  completeTask,
  resetTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
