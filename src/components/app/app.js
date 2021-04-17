import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
          label,
          important: false,
          done: false,
          id: this.maxId++
        }
    }

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
        const newItem = this.createTodoItem(text);

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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, 
        [propName]: !oldItem[propName]};

        return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {	
            return {
              todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };
  
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {	
            return {
              todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    /* Напишем ф., которая будет фильтровать наши елементы
    В нашей ф. render мы больше не можем выводить все ел. массива todoData. Нам нужно создать отдельный
    массив, в котором будут видимые на текущий момент елементы */

    search(items, term) {	        // будет принимать массив ел. и тот текст который мы пытаемся найти

        if (term.length === 0) {	// если пустая строка, то вернем все item-ы
        return items;
        }    
    
        return items.filter((item) => {
          return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;  // Вернуть если indexOf > -1, если есть совпадения, то будет > -1
        });
    }
    
    render() {
        const { todoData, term } = this.state;
    
        const visibleItems = this.search(todoData, term);
        const doneCount = todoData
	        .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
              <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel 
                        onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter />
                </div>

                <TodoList 
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}