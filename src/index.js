import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;			// если одна строка, то () ставить не нужно
};

const SearchPanel = () => {
  return <input placeholder="search"/>;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />      {/*теперь имя этого компонента можно исп. как отдельный html-тег */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));