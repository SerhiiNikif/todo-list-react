import React from 'react';
import TodoListItem from './todo-list-item';

/*
Раньше этот компонент сам решает какие данные отображать
В реальном приложении данные будут приходить с сервера
Я сделал так, чтобы этот компонент отвечал только за отображения списка
*/

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem { ...item } />	{/* использую spread-оператор для обьектов
                                        Взять каждое свойство из обьекта item и передать его
					                    в качестве атрибута вместе со значением в TodoListItem
					                    чтобы передать все из обьекта */}
      </li>
    );
  });

    return (
      <ul>
        { elements }
      </ul>
    );
};

export default TodoList;		// будет Warning, но это ничего!!!