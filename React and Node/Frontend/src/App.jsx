import React from 'react'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddAdmin from './Component/AddAdmin'
import ViewAdmin from './Component/ViewAdmin'
import EditAdmin from './Component/EditAdmin'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/Dashboard' Component={Dashboard}></Route>
        <Route path='/AddAdmin' Component={AddAdmin}></Route>
        <Route path='/ViewAdmin' Component={ViewAdmin}></Route>
        <Route path='/editAdmin' Component={EditAdmin}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
