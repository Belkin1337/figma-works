import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CoworkingModule } from './module/coworking/index.tsx';
import { RealEstateModule } from './module/real_estate_business/index.tsx';
import { App } from './App.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/1",
    element: <RealEstateModule/>,
  },
  {
    path: "/2",
    element: <CoworkingModule/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)