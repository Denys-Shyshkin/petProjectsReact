import React from 'react';

const ListItem = (props) => {
  if (props.data === undefined) {
    return null;
  }

  return props.data.map((item) => {
    const { id, text } = item;
    return (
      <li key={id} className="list-item">
        <span>{text}</span>
        <button className="deleteBtn" onClick={() => props.delete(id)}>
          X
        </button>
        <button className="checkBtn" onClick={() => props.check()}>
          V
        </button>
      </li>
    );
  });
};

export default ListItem;
