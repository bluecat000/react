import React from 'react';
import ReactDom from 'react-dom';
import List from './components/List';
import './scss/index.scss';

function App() {
  return (
    <div>
      <h1>列表</h1>
      <List />
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);