import React from "react";
import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const barData = [
  { name: "Mon", equity: 4, debt: 2 },
  { name: "Tue", equity: 7, debt: 3 },
  { name: "Wed", equity: 4, debt: 2 },
  { name: "Thu", equity: 2, debt: 1 },
  { name: "Fri", equity: 3, debt: 2 },
  { name: "Sat", equity: 4, debt: 2 },
  { name: "Sun", equity: 6, debt: 3 },
];

const lineData = [
  { name: "Jan", value: 1 },
  { name: "Feb", value: 2.5 },
  { name: "Mar", value: 1.8 },
  { name: "Apr", value: 2.6 },
  { name: "May", value: 1.7 },
  { name: "Jun", value: 3 },
];

const areaData = [
  { name: "1", gross: 2400, net: 1200 },
  { name: "5", gross: 3000, net: 1500 },
  { name: "10", gross: 3300, net: 2000 },
  { name: "15", gross: 2500, net: 1800 },
  { name: "20", gross: 2900, net: 1200 },
  { name: "25", gross: 3100, net: 1900 },
];



export default function Dashboard() {

 

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 text-white fixed h-screen">
        <h2 className="p-5 text-xl font-bold border-b border-slate-700">
          KPI Admin
        </h2>
        <nav className="flex flex-col p-4 gap-2 text-sm">
  <a
    href="#"
    className="px-4 py-2 rounded-lg  text-white font-medium"
  >
    📊 Dashboard
  </a>
  <a
    href="/addAdmin"
    className="px-4 py-2 rounded-lg  text-white font-medium"
  >
   ➕ Add Admin
  </a>
  <a
    href="/viewAdmin"
    className="px-4 py-2 rounded-lg  text-white font-medium"
  >
    👁 View Admin
  </a>  

 
</nav>

      </aside>

      {/* Main Content */}
      <div className="ml-60 w-full">

        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">KPI Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center font-bold">
              H
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Debt to Equity</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="equity" stackId="a" fill="#60a5fa" />
                <Bar dataKey="debt" stackId="a" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Net Profit Margin</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
            <h3 className="font-semibold mb-2">Gross Profit Margin</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="gross" stroke="#a855f7" fill="#d8b4fe" />
                <Area type="monotone" dataKey="net" stroke="#3b82f6" fill="#bfdbfe" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
}
