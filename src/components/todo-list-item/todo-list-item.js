import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component { 

    state = {
      done: false   // После того как я первый раз проинициализировал state,
    };              // его болше нельзя изменять напрямую

    onLabelClick = () => {
        this.setState({		/* сюда можно передать объект с изменениями, которые хотим 
                            внести в state. Что мы хотим поменять? Когда польз. кликает
                            на нашем label, мы сменим состояния */
          done: true
        });
    };
  
    render () {	
        const { label, important = false } = this.props;
        const { done } = this.state;			// деструктурируем
                                                // state можно читать, но нельзя изменять напрямую

        let classNames = 'todo-list-item';	    // вынесем назв. класса в перепенную
        if(done) {
            classNames += ' done';		        // с условием конкатинируем классы
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={ classNames }>		{/* сразу же используем */}
            <span
                className="todo-list-item-label"
                style={style}
                onClick={ this.onLabelClick }>
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