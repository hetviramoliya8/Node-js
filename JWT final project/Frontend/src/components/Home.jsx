import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function Home() {
      const navigate = useNavigate();

  return (
    <div>
   <Navbar/>


     <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-6">

      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600">TaskMaster 📝</h1>
        <nav className="space-x-4">
          <button
            onClick={() => navigate("/tasks")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold"
          >
            Go to Tasks
          </button>
          <button
            onClick={() => navigate("/about")}
            className="bg-white border border-indigo-500 hover:bg-indigo-100 text-indigo-500 px-4 py-2 rounded-xl font-semibold"
          >
            About
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center space-y-6">
        <h2 className="text-4xl font-bold text-indigo-700">Welcome to TaskMaster!</h2>
        <p className="text-gray-600 max-w-lg">
          Organize your tasks, set priorities, and never miss a deadline. Click the button below to manage your tasks easily.
        </p>
        <button
          onClick={() => navigate("/TaskFrom")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold text-lg"
        >
          Go to Task Manager
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-10 text-gray-500 text-sm">
        © 2026 TaskMaster. All rights reserved.
      </footer>
    </div>
    </div>
  )
}
