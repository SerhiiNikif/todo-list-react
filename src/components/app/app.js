import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

/* Сделаем компонент, который показывает сколько дел мы уже сделали, а сколько нет
Нужно done и important поднять на уровень App. И тогда если App будет знать состояния 
done каждого елемента он сможет обновлять наш AppHeader каждый раз, когда состояния 
одного из елементов изменяеться */

export default class App extends Component {

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
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++		
        };

        this.setState(({todoData}) => {
            
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    onToggleImportant = (id) => {		    // этой ф. нужно знать id, который изменил свой статус
        console.log('Toggle Important', id);
      };
    
      onToggleDone = (id) => {		        // этой ф. нужно знать id, который изменил свой статус
        console.log('Toggle Done', id);
      };	                                // И если мы увидим эти надписи в консоли, это будет означать
                                            // что App получает свои события

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
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}