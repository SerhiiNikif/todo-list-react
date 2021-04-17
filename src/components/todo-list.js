import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drinck Coffee"/></li>
            <li><TodoListItem               // Если ел. списка будет отмечен как important, то выделим текст цветом
                label="Build React App"
                important /></li>          {/* тоже что и important={true} */}
        </ul>
    );
};

export default TodoList;