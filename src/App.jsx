import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Layout from './pages/Layout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/video/:categoryId/:videoId',
          element: <Video />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App