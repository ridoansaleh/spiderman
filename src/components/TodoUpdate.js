import React, { Component } from 'react';

export default class TodoUpdate extends Component {
  render() {
    const { selectedTask } = this.props;
    return (
      <div className="buttons-container">
        <button
          type="button"
          disabled={selectedTask ? selectedTask.status === 'completed' : false}
          onClick={() => {
            console.log('Hello : ', selectedTask);
            selectedTask && this.props.completeTask({ ...selectedTask, status: 'completed' });
          }}
        >
          Complete
        </button>
        <button type="button" disabled={selectedTask ? selectedTask.status === 'waiting' : false}>
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
