import React from 'react';

const TodoListItem = ( { label, important = false } ) => {  // деструктурируем
                                                            // по ум. если не передаем important, то будет false
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return <span style={ style }>{ label }</span>;
};

export default TodoListItem;