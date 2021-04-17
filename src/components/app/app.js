import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

/* Мы передали в App 2 события onToggleDone и onToggleImportant, которые App может использовать, чтобы
обновить свой state todoData

state todoData передаеться из App в качестве props в TodoList, а TodoList в качестве props передает
конкретные ел. todoData каждому TodoListItem. И таким способом TodoListItem будет получать
информацию о том, что он стал важным или выполненым. 

Сделаем так, чтобы App обновлял свой state (todoData) когда ему приходит информация, что один из
ел. стал done или important */

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
      };

    // Создадим ф. которая будет создавать новый ел. для нашего todo-списка
    createTodoItem(label) {	        // этой ф-ции нужно знать только текст этого item
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

    toggleProperty(arr, id, propName) { 	// будет принимать массив с которым мы будем работать, id ел.
                                            // который мы будем изменять и имя проперти которую нам
                                            // нужно изменить  с true на false

        const idx = arr.findIndex((el) => el.id === id);	// вместо todoData arr

        const oldItem = arr[idx];
        const newItem = {...oldItem, 
        [propName]: !oldItem[propName]};		// вместо done передаем propName

        return [
        ...arr.slice(0, idx), 	// arr
        newItem,
        ...arr.slice(idx + 1)	// arr
        ];
    }
   
    // onToggleDone = (id) => {
    //     // Мы не можем изменять старый state
    //     this.setState(({ todoData }) => {	        // в параметрах старый todoData

    //         const idx = todoData.findIndex((el) => el.id === id);
    //         // 1. нужно обновить обьект, который находиться в нужном месте в массиве
    //         const oldItem = todoData[idx];

    //         /* нам нужно создать новый обьект, который имеет все те же свойства со
    //         всеми теми же значениями, что и старый oldItem, кроме свойства done */
    //         const newItem = {...oldItem,    // с помощью Object spread-оператора
    //             done: !oldItem.done};       /* и если после этого oldItem добавим еще одно свойство, то
    //                                         то это свойство ...oldItem перезапишет свойство, которое
    //                                         мы скопировали до этого done */

    //         // 2. нужно сконструировать новый массив, поскольку мы не можем изменять существующий
    //         const newArray = [
    //             ...todoData.slice(0, idx), 
    //             newItem,			        // теперь на место удаленного ел. мы поставим newItem
    //             ...todoData.slice(idx + 1)
    //           ];
      
    //         return {
    //             todoData: newArray
    //         }
    //     });
    // };

    // onToggleImportant = (id) => {
    //     console.log('Toggle Important', id);
    // };

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

    render() {
        const { todoData } = this.state;
        const doneCount = todoData
	        .filter((el) => el.done).length;	// все ел. где done == true
						                        // filter создает новый массив
        const todoCount = todoData.length - doneCount;	// кол. ел. которые осталось сделать
        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList 
                    todos={ todoData }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}