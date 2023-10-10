import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter,Link } from 'react-router-dom';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Home from './Components/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children :[
      {
        path: '/',
        // element: <div><Link to="/page/1">Show Cars</Link></div>
        element: <Home/>
      },
      {
        path: '/page/:pageNumber',
        element: <div>
          <Cards/>
        </div>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
