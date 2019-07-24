import {
  FETCH_ALL_START,
  FETCH_ALL_SUCCEED,
  FETCH_ALL_FAILED,
  SAVE_TASK_START,
  SAVE_TASK_SUCCEED,
  SAVE_TASK_FAILED,
  SET_SELECTED_TASK,
} from './types';

let initState = {
  isFetchAllStart: false,
  isFetchAllSucceed: false,
  isFetchAllFailed: false,
  fetchAllError: '',
  isSaveTaskStart: false,
  isSaveTaskSucceed: false,
  isSaveTaskFailed: false,
  saveTaskError: '',
  data: [],
  selectedTask: null,
};

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_START:
      return {
        ...state,
        isFetchAllStart: true,
      };
    case FETCH_ALL_SUCCEED:
      return {
        ...state,
        isFetchAllSucceed: true,
        data: action.payload,
      };
    case FETCH_ALL_FAILED:
      return {
        isFetchAllFailed: true,
        fetchAllError: action.error,
        ...state,
      };
    case SAVE_TASK_START:
      return {
        ...state,
        isSaveTaskStart: true,
      };
    case SAVE_TASK_SUCCEED:
      let leftData = state.data.filter(todo => todo.id !== action.payload.id);
      let newData = [...leftData, action.payload];
      return {
        ...state,
        isSaveTaskSucceed: true,
        data: newData,
      };
    case SAVE_TASK_FAILED:
      return {
        ...state,
        isSaveTaskFailed: true,
        saveTaskError: action.error,
      };
    case SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
