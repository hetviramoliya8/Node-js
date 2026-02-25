import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
        TaskManager
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to={"/Navbar"}>
        <a href="/Navbar" className="hover:text-indigo-600">Home</a>
        </Link>
        <Link to={"/TaskForm"}>
        <a href="TaskFrom" className="hover:text-indigo-600">Tasks</a>
        </Link>
        <Link to={"/Profile"}>
        <a href="/Profile" className="hover:text-indigo-600">Profile</a>
        </Link>
      </div>

      {/* Button */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Logout
      </button>

    </nav>
    </div>
  )
}
