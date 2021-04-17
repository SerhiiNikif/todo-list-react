import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component { 

    render () {	
      const { label, onDeleted, 
              onToggleImportant,            // получим onToggleImportant, onToggleDone
              onToggleDone,
              important, done } = this.props;

/* И затем в компонентах, когда у нас возникают события, которые мы раньше обрабатывали локально и
обновляли наш state, мы просто вызовем нашы eventListener-ы, которые нам передали сверху */

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
                  onClick={ onToggleDone }>
                  {label}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={ onToggleImportant }>
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ onDeleted }>
                <i className="fa fa-trash-o" />
              </button>
{/* Теперь когда нажымаем на ел. списка в консоли выводить Toggle Done 1
Когда нажимаем на восклицательный знак, то Toggle Important 2. Т.е. нашы события работают правильно */}     
            </span>
        );
    };
}