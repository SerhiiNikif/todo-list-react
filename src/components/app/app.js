import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
    // id нам нужно згенерить самостоятельно
    maxId = 100;

    state = {
        todoData: [
          { label: 'Drink Coffee', important: false, id: 1 },
          { label: 'Make Awesome App', important: true, id: 2 },
          { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
           
            const idx = todoData.findIndex((el) => el.id === id); 
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }		
        });
    };

    addItem = (text) => {
        // generate id?
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++		// может показаться, что мы меняем состояния класса
                                    // на самом деле maxId - это не состояние класса, он не находиться
                                    // в обьекте state
        };

        // Мы не можем изменять массив и изменять предыдущее состояние
        this.setState(({todoData}) => {
            // Новый масиив будет состоять из всех ел. старого массива + новый елемент
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
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
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}