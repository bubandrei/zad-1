import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleComponent from './SimpleComponent';
import reportWebVitals from './reportWebVitals';
import FunctionalComponent from './FunctionalComponent';

ReactDOM.render(
  <React.StrictMode>
    <SimpleComponent />
    <FunctionalComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
