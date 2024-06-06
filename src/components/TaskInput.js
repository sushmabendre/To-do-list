// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; // Import addTask action creator

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task)); // Dispatch the addTask action
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add task"
        value={task}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
