import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actionTypes';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.taskId ? { ...task, text: action.payload.newText } : task
        )
      };
    default:
      return state;
  }
};

export default reducer;
