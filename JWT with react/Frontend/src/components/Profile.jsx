import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/");
        } else {
            handleProfile();
        }
    }, [])

    const handleProfile = async () => {
        await axios.get("http://localhost:2312/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data.user);
        })
    }

    return (
<div className="min-h-screen bg-gray-100">

  {/* Header */}
  <header className="bg-white border-b shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-purple-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </h1>

      <button
        onClick={() => navigate("/")}
        className="px-5 py-2 text-purple-600 font-bold rounded-lg hover:bg-purple-700 transition"
      >
        Logout
      </button>
    </div>
  </header>

  {/* Main */}
  <main className="max-w-5xl mx-auto px-6 py-10">

    <div className="bg-white rounded-2xl shadow-md p-8">

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 border-b pb-6">

        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-purple-600">
            {user.name ? user.name.charAt(0).toUpperCase() : ""}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-600">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 cursor-pointer text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition">
            Edit Profile
          </button>

          <button
            onClick={() => navigate("/changePass")}
            className="px-4 py-2 cursor-pointer  bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <div className="border rounded-xl p-5 hover:shadow-md transition">
          <p className="text-sm text-gray-500">User ID</p>
          <p className="text-lg font-semibold text-gray-800">#12345</p>
        </div>

        <div className="border rounded-xl p-5 hover:shadow-md transition">
          <p className="text-sm text-gray-500">Role</p>
          <p className="text-lg font-semibold text-gray-800">User</p>
        </div>

        <div className="border rounded-xl p-5 hover:shadow-md transition">
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-lg font-semibold text-green-600">Active</p>
        </div>

      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Name</span>
              <span className="text-gray-800">{user.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-800">{user.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Phone</span>
              <span className="text-gray-800">+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-gray-800 mb-4">
            Account Details
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Joined</span>
              <span className="text-gray-800">Jan 2024</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Plan</span>
              <span className="text-gray-800">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Last Login</span>
              <span className="text-gray-800">Today</span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </main>
</div>
    );
}

