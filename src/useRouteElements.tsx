import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import MainLayout from './layouts/MainLayout'
import Detail from './pages/Detail'
import CreateArt from './pages/CreateArt'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/nguyenhcpse180068',
          element: <Dashboard />
        },
        {
          path: '/detail/:id',
          element: <Detail />
        },
        {
          path: '/nguyenhcpse180068/add',
          element: <CreateArt />
        }
      ]
    }
  ])
  return routeElements
}
