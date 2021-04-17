import React, { Component } from 'react';
import './item-add-form.css';

/* Улучшим нашу форму добаления новой записи и сделаем так, чтобы поле очищалось после того как 
пользователь создаст новый ел. */

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLableChange = (e) => {

    this.setState({
      label: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();	
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
    // Когда введем что-то в input, нажмем enter, добавить ел и поле input очиститься
  };

/* Для того чтобы сделать ел. контролируемым, нам нужно сделать так, чтобы значение ел. 
value={ this.state.label } устанавливалось из состояния компонента */  

  render() {
    return (
        <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
          <input type="text"
              className="form-control"
              onChange={ this.onLableChange }
              placeholder="What needs to be done" 
              value={ this.state.label }
          />

          <button className="btn btn-outline-secondary">
            Add Item
          </button>
        </form>
    )
  }
}