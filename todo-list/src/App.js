import React, { createRef, useState } from 'react';
import ListItem from './ListItem';

import './App.css';

let id = 0;
let style;
let list = [];

let textInput = createRef();

function App() {
  const [value, setValue] = useState(list);

  const addListItem = () => {
    list.push({ id: id, text: textInput.current.value });
    id += 1;
    const newList = [...list];
    setValue(newList);
    textInput.current.value = '';
    if (list.length > 0) {
      style = 'output-container';
    }
  };

  const checkItemHandler = () => {
    console.log('checked');
  };

  const deleteItemHandler = (id) => {
    const resultedList = list.filter((item) => item.id !== id);
    list = [...resultedList];
    setValue(resultedList);
    if (list.length < 1) {
      style = '';
    }
  };

  const clearAllList = () => {
    list = [];
    style = '';
    setValue(list);
  };

  return (
    <div className="main-container">
      <section className="input-container">
        <h1>TODO List</h1>
        <input type="text" ref={textInput} />
        <button onClick={addListItem}>Add</button>
        <button onClick={clearAllList}>Clear All</button>
      </section>
      <section className={style}>
        <ol>
          <ListItem
            data={value}
            delete={deleteItemHandler}
            check={checkItemHandler}
          />
        </ol>
      </section>
    </div>
  );
}

export default App;
