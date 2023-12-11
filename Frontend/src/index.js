import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './components/ErrorPage';
import Dashboard from "./components/dashboard";
import Financial from './components/Financial';
import Inventory from './components/Inventory';
import Overview from './components/Overview';
import Profile from './components/profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,    
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
      children: [
        {
          path: "financial",
          element: <Financial />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "profile",
          element: <Profile />
        }
      ]        
  },    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();