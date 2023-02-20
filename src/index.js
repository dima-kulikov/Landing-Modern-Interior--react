import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.scss';
import Header from "./Components/Header/Header"
import Crafted from './Components/Crafted/Crafted';
import Choose from './Components/Choose/Choose';
import Modern from './Components/Modern/Modern';
import Feedback from './Components/Feedback/Feedback';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Crafted/>
    <Choose/>
    <Modern/>
    <Feedback/>
    <Blog/>
    <Footer/>
  </React.StrictMode>
);

