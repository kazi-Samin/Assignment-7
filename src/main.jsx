import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes';
import Context from './ContextApi/Context';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>
      <RouterProvider router={router} />
      <ToastContainer />
     </Context>
  </StrictMode>,
)
