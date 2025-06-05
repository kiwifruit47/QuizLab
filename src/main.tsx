import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import { Art } from './pages/Art.tsx'
import { Geography } from './pages/Geography.tsx'
import { History } from './pages/History.tsx'
import { Literature } from './pages/Literature.tsx'
import { Movies } from './pages/Movies.tsx'
import { Music } from './pages/Music.tsx'
import { ErrorRoute } from './pages/ErrorRoute/ErrorRoute.tsx'
import { FAQs } from './pages/FAQs.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorRoute/>
  },
  {
    path: '/art',
    element: <Art/>
  },
  {
    path: '/faqs',
    element: <FAQs/>
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
