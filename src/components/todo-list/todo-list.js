  
import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
        <li key={id} className="list-group-item">
        <TodoListItem 
	        {...itemProps } 
	        onDeleted={() => onDeleted(id)}/>		{/* добавили свое событие */}

{/* Теперь наш App.js знает, что один из ел. удалился. Следующий шаг, это удалить этот ел. из массива и обновить
приложения. Но сейчас, мы это сделать не сможем, потому что массив todoData это не часть состояния, не часть
state компонента App. Сейчас компонент App - это просто функция, ее нужно сделать классом, а todoData частью
состояния */}           
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;