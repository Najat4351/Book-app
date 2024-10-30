
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Home from './components/home'
import Author from './components/author'
import Rootlayout from './layouts/Rootlayout'

const router=createBrowserRouter(
  createRoutesFromElements(<>
     
     <Route path="/" element={<Login/>}/>
    
      <Route path="/" element={<Rootlayout/>}>
         <Route path="home" element={<Home/>}/>
      </Route>
      <Route path="author" element={<Author/>}/>
      </>

  )
)
function App() {
  
  return (<>
  
    <RouterProvider router={router}/></>
  )
}

export default App
