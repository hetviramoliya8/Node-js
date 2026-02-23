import React from 'react'
import Header from './Header'

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-50">
  <Header />

  <div>

    {/* Hero Section */}
    <section className="bg-white py-24 border-b">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-5">
          Build Modern Websites 🚀
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Create fast and responsive designs using Tailwind CSS
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 shadow-md transition">
          Get Started
        </button>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-purple-600 mb-3">Fast ⚡</h3>
          <p className="text-gray-600">
            Optimized performance for better user experience
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-purple-600 mb-3">Responsive 📱</h3>
          <p className="text-gray-600">
            Fully responsive design for all devices
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-purple-600 mb-3">Modern 🎨</h3>
          <p className="text-gray-600">
            Clean and modern UI components
          </p>
        </div>

      </div>
    </section>

    {/* Subscribe */}
    <section className="bg-white py-20 border-t">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Subscribe to Updates 💌
        </h2>
        <p className="text-gray-600 mb-8">
          Get updates about new designs
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl border w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="bg-purple-600 text-white px-7 py-3 rounded-xl hover:bg-purple-600 shadow-md transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-300 text-sm">
        © 2026 MyWebsite. All rights reserved.
      </div>
    </footer>

  </div>
</div>
  )
}
