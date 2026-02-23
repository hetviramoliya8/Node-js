import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:2312/login", formdata)
    if (res.data.auth) {
      alert(res.data.msg);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard")
    } else {
      alert(res.data.msg);
      navigate("/")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">

  <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl ">

    <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
      Login
    </h2>

    <form onSubmit={handleLogin}>

      <div className="mb-5">
        <label className="block text-gray-700 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition duration-300 shadow-md"
      >
        Login
      </button>

      <p className="text-center text-gray-600 mt-5 text-sm">
        Don’t have an account?{" "}
        <Link to="/register" className="text-purple-600 font-semibold hover:underline">
          Register
        </Link>
      </p>

    </form>

    <div className="text-center mt-4">
      <Link to="/forgetPass" className="text-purple-600 hover:underline text-sm">
        Forgot Password?
      </Link>
    </div>

  </div>
</div>
  )
}
