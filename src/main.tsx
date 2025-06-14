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
    path: '/quiz-lab/',
    element: <HomePage/>,
    errorElement: <ErrorRoute/>
  },
  {
    path: '/quiz-lab/art',
    element: <Art/>
  },
  {
    path: '/quiz-lab/faqs',
    element: <FAQs/>
  },
  {
    path: '/quiz-lab/geography',
    element: <Geography/>
  },
  {
    path: '/quiz-lab/history',
    element: <History/>
  },
  {
    path: '/quiz-lab/literature',
    element: <Literature/>
  },
  {
    path: '/quiz-lab/movies',
    element: <Movies/>
  },
  {
    path: '/quiz-lab/music',
    element: <Music/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
