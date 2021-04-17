import React from 'react';
import TodoListItem from './todo-list-item';
/*
Warning был потому, что я вынес елементы списка в отдельный массив - 
это массив реакт-елементов, а потом использовал этот массив в JSX разметке.
Реакт хочет, чтобы у каждого елемента li был уникальный ключ, свойство key
*/
const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

    const { id, ...itemProps } = item;	/* сюда ввойдут все те свойства, которые не были 
                                        деструктурированы в этом выражении. 
                                        А в моем случаи это все свойства кроме id */
      return (
        <li key={ id }>	{/* в реальном проекте key буду получать как id, напр. из БД */}
          <TodoListItem { ...itemProps } />     {/* теперь id не будет передаваться в TodoListItem */}
        </li>
      );
    });
  
    return (
        <ul>
            { elements }
        </ul>
    );
  };

export default TodoList;