import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />} >
      <Route path='' element= {<Home/>} />
      <Route path='about' element= {<About/>} />
      <Route path='contact' element= {<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
