import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import TaskForm from './components/TaskForm'
import Navbar from './components/Home'
import Home from './components/Home'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/Navbar" Component={Navbar} />
        <Route path="/Home" Component={Home} />
        <Route path="/TaskFrom" Component={TaskForm} />
        
      </Routes>
    </BrowserRouter>
  )
}