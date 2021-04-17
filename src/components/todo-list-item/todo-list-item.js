import React, { Component } from 'react';
import './todo-list-item.css';

// Переделаем компонент TodoListItem в класс
export default class TodoListItem extends Component {	// наследуем класс React.Component
  // Теперь было бы неполохо в этот класс поместить ф-цию, которая будет отображать наш компонент
  // как TodoListItemFunc. И в классе такая ф-ция будет называться render

  render () {		/* Эта ф-ция не принимает на вход значения props, вместо этого все свойства
			        можно получить через обьект this.props - это то место из которого можем
			        получить текущее свойство

Возмем названия свойств, которые до этого были обьявлены в обьявлении ф-ции и деструктурируем их
в начале нашей ф-ции и получим их из this.props */

    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}