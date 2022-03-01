import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Binding from './Binding';
import Gift from './Gift';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Gift/>
    <Binding/>
  </React.StrictMode>,
  document.getElementById('root')
);

