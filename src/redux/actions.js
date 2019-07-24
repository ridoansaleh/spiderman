import {
  FETCH_ALL_START,
  FETCH_ALL_SUCCEED,
  FETCH_ALL_FAILED,
  SAVE_TASK_START,
  SAVE_TASK_SUCCEED,
  SAVE_TASK_FAILED,
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
