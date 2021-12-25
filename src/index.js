import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './Router';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Router />
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);