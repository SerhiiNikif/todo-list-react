import React, { Component } from 'react';
import './todo-list-item.css';

/* Сделаю так, чтобы пользователь нажимал на восклицательный знак устанавливал 
важность елемента */

export default class TodoListItem extends Component { 

    state = {
      done: false,
      important: false		// добавим еще один ел.
    };

/* Когда мы добавили новые ел. к текущему state, мы не обновляли предыдущие вызовы setState
setState принимает не полный state, а только те значения, которое нужно изменить */

    onLabelClick = () => {
        this.setState({
          done: true
        });
    };

    onMarkImportant = () => {
        this.setState({
          important: true
        });
      };
  
    render () {	
        const { label } = this.props;               // вынесем important из props
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