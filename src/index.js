import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./App.css";
import './media.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Routerlayout from './assets/routerlayout/Routerlayout';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Pdf from './assets/pages/Pdf';
import Contact from './assets/pages/Contact';
import Blog from './assets/pages/Blog';
import Context from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routerlayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/PDF-Catalog' element={<Pdf />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Blogs' element={<Blog />} />

    </Route>

  )
)
root.render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={routes} />
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
