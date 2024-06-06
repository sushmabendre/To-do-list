// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions'; // Import deleteTask action creator

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch the deleteTask action
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
