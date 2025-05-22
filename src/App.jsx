import React from 'react'
import Projects from './components/Projects'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Home'
import Contact from './components/Contact'

import Navbar from './components/Navbar'
import './index.css'

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage /> 
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/projects',
      element: <Projects />
    }, 
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
