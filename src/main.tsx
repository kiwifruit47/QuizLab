import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import { About } from './pages/About.tsx'
import { Art } from './pages/Art.tsx'
import { FQAs } from './pages/FQAs.tsx'
import { Geography } from './pages/Geography.tsx'
import { History } from './pages/History.tsx'
import { Literature } from './pages/Literature.tsx'
import { Movies } from './pages/Movies.tsx'
import { Music } from './pages/Music.tsx'
import { ErrorRoute } from './pages/ErrorRoute/ErrorRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorRoute/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/art',
    element: <Art/>
  },
  {
    path: '/fqas',
    element: <FQAs/>
  },
  {
    path: '/geography',
    element: <Geography/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/literature',
    element: <Literature/>
  },
  {
    path: '/movies',
    element: <Movies/>
  },
  {
    path: '/music',
    element: <Music/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
