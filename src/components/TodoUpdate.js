import React, { Component } from 'react';

export default class TodoUpdate extends Component {
  handleClickComplete = task => {
    this.props.completeTask({ ...task, status: 'completed' });
  };

  handleClickReset = task => {
    this.props.resetTask({ ...task, status: 'waiting' });
  };

  render() {
    const { selectedTask } = this.props;
    return (
      <div className="buttons-container">
        <button
          type="button"
          disabled={selectedTask ? selectedTask.status === 'completed' : false}
          onClick={() => this.handleClickComplete(selectedTask)}
        >
          Complete
        </button>
        <button
          type="button"
          disabled={selectedTask ? selectedTask.status === 'waiting' : false}
          onClick={() => this.handleClickReset(selectedTask)}
        >
          Reset
        </button>
        <button type="button" onClick={() => this.props.handleEditClick(true)}>
          Edit
        </button>
        <button type="button"> Delete </button>
      </div>
    );
  }
}
