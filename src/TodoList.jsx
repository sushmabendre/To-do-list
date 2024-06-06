import React, { useState, useEffect } from 'react';
import './App.css';

function TodoList() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Index of task being edited
  const [editValue, setEditValue] = useState(''); // Value of task being edited

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, isCompleted: false }]);
      setInputValue('');
    }
  };
  
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  
  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

 
  const handleEditTask = (index, text) => {
    setEditIndex(index);
    setEditValue(text);
  };

 
  const handleSaveEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = editValue;
    setTasks(newTasks);
    setEditIndex(null); // Reset edit index
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.isCompleted ? 'completed' : ''}>
            {editIndex === index ? (
              <>
                <input 
                  type="text" 
                  value={editValue} 
                  onChange={(e) => setEditValue(e.target.value)} 
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                <span onClick={() => handleToggleTask(index)}>{task.text}</span>
                <button onClick={() => handleEditTask(index, task.text)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
