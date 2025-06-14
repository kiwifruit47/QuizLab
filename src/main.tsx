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
import { FAQs } from './pages/FAQs/FAQs.tsx'

const router = createBrowserRouter([
  {
    path: '/quizlab/',
    element: <HomePage/>,
    errorElement: <ErrorRoute/>
  },
  {
    path: '/quizlab/art',
    element: <Art/>
  },
  {
    path: '/quizlab/faqs',
    element: <FAQs/>
  },
  {
    path: '/quizlab/geography',
    element: <Geography/>
  },
  {
    path: '/quizlab/history',
    element: <History/>
  },
  {
    path: '/quizlab/literature',
    element: <Literature/>
  },
  {
    path: '/quizlab/movies',
    element: <Movies/>
  },
  {
    path: '/quizlab/music',
    element: <Music/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
