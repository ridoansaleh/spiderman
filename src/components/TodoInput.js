import React, { Component } from 'react';

export default class TodoInput extends Component {
  state = {
    task: '',
    isEditOn: false,
  };

  // static getDerivedStateFromProps(props) {
  //   return {
  //     task: props.isEditOn ? (props.selectedTask ? props.selectedTask.task : '') : '',
  //     isEditOn: props.isEditOn,
  //   };
  // }

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

  componentDidUpdate() {
    console.log('didupdate');
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
