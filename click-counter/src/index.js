import React, { useState } from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App-main">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click Me!</button>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
