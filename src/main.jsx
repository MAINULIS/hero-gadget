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
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import { productsAndCartData } from './loaders/GetCart&ProductData.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'shop',
        element: <Shop />,
        loader: () => fetch('products.json'),
      },
      {
        path:'cart',
        element: <Cart />,
        loader: () =>productsAndCartData(),
      },
      {
        path:'about',
        element: <About />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
