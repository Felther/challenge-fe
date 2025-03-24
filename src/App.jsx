import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> }>
      <Route index element={ <HomePage /> }/>
      <Route path='/about' element={ <About /> }/>
      <Route path='*' element={ <NotFoundPage /> }/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App