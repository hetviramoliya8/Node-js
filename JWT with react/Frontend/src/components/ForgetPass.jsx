import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

export default function ForgetPass() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const sendOtp = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2312/forgetPass", formdata, {withCredentials: true}).then((res) => {
      if(res.data.msg === "OTP sended Successfully !"){
        alert(res.data.msg)
        navigate("/verifyPass")
      }else{
        alert(res.data.msg)
        navigate("/forgetPass")
      }
    })
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
  <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl ">

    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-purple-600">
        Forgot Password?
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        Don’t worry! Enter your email to reset your password.
      </p>
    </div>

    <form onSubmit={sendOtp}>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          name="email"
          required
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-300 font-semibold shadow-md"
      >
        Send OTP
      </button>
    </form>

    <div className="flex items-center my-8">
      <div className="flex-grow h-px bg-gray-300"></div>
      <span className="px-3 text-gray-400 text-sm">OR</span>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>

    <div className="text-center">
      <Link
        to="/"
        className="text-purple-600 hover:underline text-sm font-medium"
      >
        ← Back to Login
      </Link>
    </div>

  </div>
</div>
  );
}
