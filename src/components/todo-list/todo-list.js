import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted,
                    onToggleImportant,
                    onToggleDone }) => {	// получили из props
                                          // Теперь нужно вызвать эти 2 ф. с правыльными id

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
      <TodoListItem 
          {...itemProps } 
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}  // Когда нам елемент скажет что 
          onToggleDone={() => onToggleDone(id)}		         //пользователь изменил его важность
      />						                                       {/* Мы вызовем onToggleImportant с id ел. */}
      </li>	        // Теперь 2 новых eventListener-а прошли от App к TodoList
                    // И последенее что нам нужно сделать, это вызвать эти eventListener в
                    // TodoListItem
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;