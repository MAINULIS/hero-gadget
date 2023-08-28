import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'about',
        element: <About />
      },
      {
        path:'home',
        element: <Home />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
