import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">

  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Login
    </h2>

    <form onSubmit={handleSubmit}>
      {/* <!-- Email --> */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* <!-- Password --> */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* <!-- Button --> */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        Login
      </button>
    </form>

    <p className="text-center text-gray-600 text-sm mt-4">
      Don't have an account?
      <a href="#" className="text-blue-600 hover:underline">Sign up</a>
    </p>
  </div>

</div>
  )
}
