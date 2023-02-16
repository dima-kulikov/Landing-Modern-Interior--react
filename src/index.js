import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.scss';
import Header from "./Components/Header/Header"
import Crafted from './Components/Crafted/Crafted';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Crafted />
  </React.StrictMode>
);

