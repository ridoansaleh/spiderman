import React, { Component } from 'react';

export default class TodoInput extends Component {
  state = {
    task: '',
    isEditOn: false,
  };

  componentDidMount() {
    document.getElementsByName('task')[0].onkeypress = e => {
      if (!e) e = window.event;
      let keyCode = e.keyCode || e.which;
      if (keyCode == '13') {
        let arr = this.props.todos.map(todo => todo.id);
        let _id = arr.length > 0 ? Math.max(...arr) + 1 : 1;
        const data = {
          id: _id,
          task: this.state.task,
          status: 'waiting',
        };
        this.props.saveTask(data);
        return false;
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isEditOn || this.state.task !== nextState.task) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isEditOn !== this.props.isEditOn) {
      this.setState({
        isEditOn: this.props.isEditOn,
        task: this.props.isEditOn
          ? this.props.selectedTask
            ? this.props.selectedTask.task
            : ''
          : '',
      });
    }
  }

  handleChangeTask = e => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    return (
      <input type="text" name="task" value={this.state.task} onChange={this.handleChangeTask} />
    );
  }
}
