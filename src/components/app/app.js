import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

/* Для того чтобы реакт обновил приложения App нужно сделать комп. классом, 
а todoData сделать частью state */

export default class App extends Component {

    state = {
        todoData: [
          { label: 'Drink Coffee', important: false, id: 1 },
          { label: 'Make Awesome App', important: true, id: 2 },
          { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {		// передаем сюда ф. потому что нам нужно установить сюда новый state
                                // А новый state это старий массив todoData без одного елемента
                                // наш новый state зависит от старого state, потому что нам нужно знать какой
                                // был старый массив
        this.setState(({ todoData }) => {
            // Для того чтобы вычислить новый state, нам нужно удалить из массива елемент
	        // Для начала получим индекс того елемента, которого мы собрались удалять
            const idx = todoData.findIndex((el) => el.id === id);   // будем искать индекс ел. у которого id такой же 
                                                                    // как тот id который мы получили
            // Теперь у нас есть индекс ел. который мы хотим удалять
            console.log(id);
            // Когда будем кликать на корзину в консоле будут индексы елементов

            const before = todoData.slice(0, idx)		// будем использовать метод slice, он не изменяет существующий массив
            const after = todoData.slice(idx + 1);	    // idx + 1 и до конца
            const newArray = [...before, ...after];

            return {	// Ну и нужно вернуть новое состояния
                todoData: newArray
            }		
        });
        // Элементы удаляються
    };

    render() {
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>

        <TodoList 
            todos={this.state.todoData}         // теперь todoData - это часть state
            onDeleted={ this.deleteItem }/>     {/* Когда будем кликать на корзину в консоле будут id елементов */}
    </div>
    );
};
}