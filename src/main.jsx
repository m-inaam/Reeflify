import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import CoralBleachingMap from './views/dashboard/CoralBleachingMap'
import Dashboard from './views/dashboard/Dashboard'
import EventsPage from './views/dashboard/EventsPage'
import HomePage from './views/dashboard/HomePage'
import MetaversePage from './views/dashboard/MetaversePage'
import NFTPage from './views/dashboard/NFTPage'
import ErrorPage from './views/ErrorPage'
import SignUp from './views/SignUp'
import LoginPage from './views/LoginPage'
import { ContextProvider } from './Context'



const Router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/coralBleachingMap",
        element: <CoralBleachingMap />,
      },
      {
        path: "/nft",
        element: <NFTPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/metaverse",
        element: <MetaversePage />,
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Router} />
    </ContextProvider>
  </React.StrictMode>,
)
