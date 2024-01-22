import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
