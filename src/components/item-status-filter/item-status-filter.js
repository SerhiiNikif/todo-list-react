import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

// Вынесем название кнопок и название фильтров в отдельный массив
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render() {
  // Этот код пройдеться по этому массиву и для каждого ел. отрисует кнопку
    const { filter, onFilterChange } = this.props;
    
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;	/* Теперь мы будем идти по ел. массива buttons и isActive
                                        станет true для той кнопки, которая должна быть активна */
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';	
      return (
        <button type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    });

    return (
      <div className="btn-group">
	      {buttons}
      </div>
    );
  }
}