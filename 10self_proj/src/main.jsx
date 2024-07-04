import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home/Home.jsx'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'
import { Projects } from './components/Projects/Projects.jsx'
import { Github } from './components/Github/Github.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Projects",
        element: <Projects />
      },
      {
        path: "Portfolio",
        element: <Portfolio />  
      },
      {
        path: "Github",
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
