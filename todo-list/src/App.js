import React, { createRef, useEffect, useState } from 'react';
import ListItem from './ListItem';

import './App.css';

let id = 0;
let style;
let list = [];

let textInput = createRef();

function App() {
  const [value, setValue] = useState(list);

  const addListItem = () => {
    if (textInput.current.value === '') {
      alert('Please enter correct value');
      return;
    }

    list.push({ id: id, text: textInput.current.value });
    id += 1;
    const newList = [...list];
    setValue(newList);
    textInput.current.value = '';
    if (list.length > 0) {
      style = 'output-container';
    }
  };

  const checkItemHandler = (id) => {
    list.forEach((item) => {
      if (item.id === id) {
        if (item.checked) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      }
    });
    const resultedList = [...list];
    setValue(resultedList);
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

  useEffect(() => {
    if (list.length > 0) {
      document.title = `Items: ${list.length}`;
    } else if (list.length === 0) {
      document.title = 'ToDo List';
    }
  });

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
