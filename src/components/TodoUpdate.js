import React, { Component } from 'react';

export default class TodoUpdate extends Component {
  render() {
    return (
      <div className="buttons-container">
        <button type="button"> Complete </button>
        <button type="button"> Reset </button>
        <button type="button"> Edit </button>
        <button type="button"> Delete </button>
      </div>
    );
  }
}
