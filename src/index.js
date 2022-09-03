import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import "../src/index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import SelectorContextProvider from './context/SelectorContext';


ReactDOM.render(
  <React.StrictMode>
    <SelectorContextProvider>
        <Router>
          <App />
        </Router>
    </SelectorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);