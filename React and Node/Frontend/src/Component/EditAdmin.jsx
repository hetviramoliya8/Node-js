import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditAdmin() {
  const location = useLocation();
  const navigate = useNavigate();
  const adminData = location.state;

  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (adminData) {
      setFormdata({
        name: adminData.name || "",
        age: adminData.age || "",
        email: adminData.email || "",
        password: adminData.password || "",
      });
    }
  }, [adminData]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:1234/updateData`,
        { ...formdata, _id: adminData._id }
      );
      alert(res?.data?.msg || "Admin updated successfully");
      navigate("/viewAdmin");
    } catch (err) {
      alert(err?.response?.data?.msg || err?.message || "Something went wrong");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Aside / Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-5 text-xl font-bold border-b border-slate-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/dashboard" className="block px-3 py-2 rounded hover:bg-slate-800">📊 Dashboard</a>
          <a href="/addAdmin" className="block px-3 py-2 rounded hover:bg-slate-800">➕ Add Admin</a>
          <a href="/viewAdmin" className="block px-3 py-2 rounded bg-slate-800">👁 View Admin</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Edit Admin</h1>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center font-bold">
              H
            </div>
            <button className="text-sm bg-red-500 text-white px-4 py-1 rounded" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 flex justify-center border-2">
          <div className="w-150 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-10">Edit Admin</h2>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formdata.name}
                  placeholder="Enter your name"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Age</label>
                <input
                  type="number"
                  name="age"
                  onChange={handleChange}
                  value={formdata.age}
                  placeholder="Enter your age"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formdata.email}
                  placeholder="Enter your Email"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formdata.password}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Update Admin
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
