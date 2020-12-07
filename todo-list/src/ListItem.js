import React from 'react';

const ListItem = (props) => {
  return props.data.map((item) => {
    const { id, text, checked } = item;
    let style;

    if (checked) {
      style = { textDecoration: 'line-through' };
    } else {
      style = { textDecoration: 'none' };
    }

    return (
      <li key={id} className="list-item">
        <span style={style}>{text}</span>
        <button className="deleteBtn" onClick={() => props.delete(id)}>
          X
        </button>
        <button className="checkBtn" onClick={() => props.check(id)}>
          V
        </button>
      </li>
    );
  });
};

export default ListItem;
