import React, { Component } from 'react';
import './search-panel.css';

/* А теперь сделаем так, чтобы значание из поля поиска переходило в App и App обновлял 
свой state сделаем input контролируемым */

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });		      // наше собственное состояние обновляеться
    this.props.onSearchChange(term);	// вызываем наш eventListener, который нам передаст App
					                            // Теперь на каждое нажатие кнопки мы будем вызывать эту ф.
  };

  render() {
    return (
      <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          value={this.state.term} 
          onChange={this.onSearchChange}/>	// добавим чтобы компонент был интерактивным, 
                                            // чтобы передавал в App каждое нажатие кнопки			
    );
  };
}