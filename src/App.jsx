import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Rootlayout from './Layout/Rootlayout'
import Login from './Pages/Login'
import ContactLayout from './Layout/ContactLayout'
import Info from './Components/Info'
import Form from './Components/Form'
import NotFound from './Pages/NotFound'
import UserLayout from './Layout/UserLayout'
import Users from './Pages/Users'
import {userLoader, userSingleLoader} from './SupportigFile/userLoader'
import User from './Components/User'
import ErrorPage from './Components/ErrorPage'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Rootlayout/>}>
          <Route index  element={<Home/>}/>
          <Route path="contact" element={<ContactLayout/>}>
          <Route path="info" element={<Info/>}/>
          <Route path="form" element={<Form/>}/>
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="users" element={<UserLayout/>} errorElement={<ErrorPage/>}>
          <Route index element={<Users/>} loader={userLoader}/>
          <Route path=":id" element={<User/>} loader={userSingleLoader}/>
          </Route>
      </Route>
      
      )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
 