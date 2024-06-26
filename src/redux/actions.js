import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId
  };
};

export const editTask = (taskId, newText) => {
  return {
    type: EDIT_TASK,
    payload: { taskId, newText }
  };
};
