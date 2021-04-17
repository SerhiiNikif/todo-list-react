import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
/*
Поместил список дел на самый верхний уровень в компонент App
Каждый ел. списка дел будет представлен отдельныи обьектом
*/
  const todoData = [
    {label: 'Drink Coffee', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Have a lunch', important: false}
  ];
  
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos = { todoData }/>
      </div>
    );
  };
  
ReactDOM.render(<App />, document.getElementById('root'));