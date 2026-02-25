import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [formdata, setFormdata] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:2312/register", formdata).then((res) => {
            alert(res.data.msg)
            navigate("/login")
        })
        setFormdata({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4 ">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-indigo-200 hover:shadow-indigo-400 transition-shadow duration-300">

        <h2 className="text-2xl font-bold text-center  text-indigo-600 mb-6">
            Register
        </h2>

        <form onSubmit={handleRegister}>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                    Name
                </label>
                <input
                    type="text"
                    name='name'
                    value={formdata.name}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">
                    Gmail
                </label>
                <input
                    type="email"
                    name='email'
                    value={formdata.email}
                    placeholder="Enter your Gmail"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                    name='password'
                    value={formdata.password}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="w-full  bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition font-semibold"
            >
                Register
            </button>

            <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 hover:underline font-medium">
                    Login
                </Link>
            </p>

        </form>
    </div>
</div>
    )
}
