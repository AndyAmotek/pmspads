/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import App from './App.jsx'
import './index.css'

import RootLayout from './navigation/RootLayout.jsx'
import ErrorPage from './pages/errors/ErrorPage.jsx'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      }
    ],
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={browserRouter}>
        <Routes>
          <Route path="/App" />
        </Routes>
      </RouterProvider>
  </React.StrictMode>,
)
