import React, { Component } from 'react';
import './todo-list-item.css';

// Разрешим пользователю менять состояния с важной назад на неважную

export default class TodoListItem extends Component { 

    state = {
      done: false,
      important: false
    };

    onLabelClick = () => {		        // сделаем тоже и для этого состояния
        this.setState(( { done }) => {	// сразу деструктурируем
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
        const { label } = this.props;
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
                    className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            </span>
        );
    };
}