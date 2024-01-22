import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Odstranit</button>
    </div>
  );
};

export default Task;
