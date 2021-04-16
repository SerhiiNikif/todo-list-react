import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {

  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  }
  return <input
    style = { searchStyle }		      // нужно передавать обьект
    placeholder={ searchText } />
};

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }		{/* true - ел. нет, false - ел. есть 
                                                  Должны быть простые выражения*/}
      <AppHeader />
      <SearchPanel />
      <TodoList items={['Item 1', 'Item 2']}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));