import {
  FETCH_ALL_START,
  FETCH_ALL_SUCCEED,
  FETCH_ALL_FAILED,
  SAVE_TASK_START,
  SAVE_TASK_SUCCEED,
  SAVE_TASK_FAILED,
  SET_SELECTED_TASK,
  COMPLETE_TASK_START,
  COMPLETE_TASK_SUCCEED,
  COMPLETE_TASK_FAILED,
} from './types';

export const fetchAllStart = () => ({
  type: FETCH_ALL_START,
});

export const fetchAllSucceed = res => ({
  type: FETCH_ALL_SUCCEED,
  payload: res,
});

export const fetchAllFailed = msg => ({
  type: FETCH_ALL_FAILED,
  error: msg,
});

export const saveTaskStart = () => ({
  type: SAVE_TASK_START,
});

export const saveTaskSucceed = res => ({
  type: SAVE_TASK_SUCCEED,
  payload: res,
});

export const saveTaskFailed = msg => ({
  type: SAVE_TASK_FAILED,
  error: msg,
});

export const setSelectedTask = data => ({
  type: SET_SELECTED_TASK,
  payload: data,
});

export const completeTaskStart = () => ({
  type: COMPLETE_TASK_START,
});

export const completeTaskSucceed = res => ({
  type: COMPLETE_TASK_SUCCEED,
  payload: res,
});

export const completeTaskFailed = msg => ({
  type: COMPLETE_TASK_FAILED,
  error: msg,
});
