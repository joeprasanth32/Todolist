import React, { useState } from 'react';

const Todo = () => {
 
  const [tasks, setTasks] = useState([]);
 
  const [taskInput, setTaskInput] = useState('');
 
  const [editIndex, setEditIndex] = useState(null);

  
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');  
    }
  };

  
  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

 
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  
  const editTask = (index) => {
    setTaskInput(tasks[index].text);  
    setEditIndex(index);              
  };

  
  const saveTask = () => {
    if (taskInput.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = taskInput;  
      setTasks(updatedTasks);
      setTaskInput('');  
      setEditIndex(null); 
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add or edit a task"
        />
        {editIndex === null ? (
          <button onClick={addTask}>Add Task</button>
        ) : (
          <button onClick={saveTask}>Save Task</button>
        )}
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleCompletion(index)}>{task.text}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
