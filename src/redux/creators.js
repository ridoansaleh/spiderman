import {
  fetchAllStart,
  fetchAllSucceed,
  fetchAllFailed,
  saveTaskStart,
  saveTaskSucceed,
  saveTaskFailed,
} from './actions';

const TODOS_URL = 'https://ridoan-api.herokuapp.com/api/todos';
const SAVE_TODO_URL = 'https://ridoan-api.herokuapp.com/api/todo';

export const fetchAllTodos = () => async dispatch => {
  dispatch(fetchAllStart());
  try {
    let response = await fetch(TODOS_URL);
    if (!response.ok) {
      dispatch(fetchAllFailed(response.statusText));
    }
    let result = await response.json();
    dispatch(fetchAllSucceed(result));
    // return result;
  } catch (error) {
    dispatch(fetchAllFailed(error));
    // return error;
  }
};

export const saveTask = data => async dispatch => {
  dispatch(saveTaskStart());
  try {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(SAVE_TODO_URL, options);
    if (!response.ok) {
      dispatch(saveTaskFailed(response.statusText));
    }
    let result = await response.json();
    dispatch(saveTaskSucceed(data));
    // fetchAllTodos();
  } catch (error) {
    dispatch(saveTaskFailed(error));
  }
};
