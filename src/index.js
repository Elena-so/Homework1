import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './lesson2/App';
// import App from './lesson3/App';
import App from './lesson4/App';
import 'bootstrap/dist/css/bootstrap.min.css'

import "./lesson4/assets/style/index.css"

ReactDOM.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
