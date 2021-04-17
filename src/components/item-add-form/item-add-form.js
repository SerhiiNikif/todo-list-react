import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLableChange = (e) => {           // Для каждой буквы которую я ввожу выводиться ф. onLableChange

    this.setState({	                // поскольку наш state не зависит от предыдущего state,
			                              // мы можем просто передать туда объект
      label: e.target.value         // наше текущее значения
    });
  }

  // Обрабатывать результаты этой формы нужно в событии onSubmit
  onSubmit = (e) => {
    e.preventDefault();     // когда этот event будет обрабатываться действия по ум.
                            // выполнять не нужно
    this.props.onItemAdded(this.state.label);
  };

  render() {
    return (
        <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
          <input type="text"				                  // добавим еще один input
              className="form-control"
              onChange={ this.onLableChange }
              placeholder="What needs to be done" 
          />

          <button className="btn btn-outline-secondary">
            Add Item
          </button>
        </form>
    )
  }
}