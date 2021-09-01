import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContextProvider from "./UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);