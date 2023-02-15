import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.scss';
import Header from "./Components/Header/Header"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);

