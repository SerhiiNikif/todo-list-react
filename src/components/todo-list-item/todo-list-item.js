import React, { Component } from 'react';
import './todo-list-item.css';

// Сделаем так, чтобы могли удалаять елементы со списка

/* Для того, чтобы удалить ел. внизу иерархии на нужно сделать так, чтобы данные вверху иерархии
на уровне App обновились

Нам нужно сделать так, чтобы компонент App узнавал, что кнопка на компоненте TodoListItem была
нажата

Сделаем так, что TodoListItem будет генирить события, которые будет слушать TodoList. TodoList
передаст это событие еще выше в ел. App и ел. App обновит массив, и затем как массив обновиться
TodoListItem исчезнет */

export default class TodoListItem extends Component { 

    state = {
      done: false,
      important: false
    };

    onLabelClick = () => {
        this.setState(( { done }) => {
          return {
            done: !done
          }
        });
      };

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
              important: !important
            };
          });		
        };
  
    render () {	
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
            <span
                className="todo-list-item-label"
                onClick={ this.onLabelClick }>
                {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
	            onClick={ onDeleted }>		{/* вызовем ф. которую нам передали в props из ел. выше 
                                            Теперь при нажатии на корзину выводиться в консоль Deleted */}
          <i className="fa fa-trash-o" />
        </button>
            </span>
        );
    };
}