import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function App() {

  const [formdata, setFormdata] = useState({})
  const [editIndex, setEditIndex] = useState(null)
  const [record, setRecord] = useState([])

  useEffect(() => {
    fechData()
  }, [])

  const fechData = async () => {
    await axios.get("http://localhost:2007/getData").then((res) => {
      setRecord(res.data.data)
    })
  }

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editIndex == null) {
      await axios.post("http://localhost:2007/addData", formdata).then((res) => {
        alert(res.data.msg)
      })
    } else {
      await axios.put(`http://localhost:2007/updatedata?id=${editIndex}`, formdata).then((res) => {
        alert(res.data.msg)
      })
    }
    fechData()
    setEditIndex(null)
    setFormdata({ name: '', age: '', city: '' })
  }

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:2007/deleteData?id=${id}`);
    alert(res.data.msg);
    let newData = record.filter((iteam) => iteam._id !== id)
    setRecord(newData);
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item._id === id);
    setFormdata({
      name: singleData.name,
      age: singleData.age,
      city: singleData.city,
      _id: singleData._id
    });
    setEditIndex(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          CRUD with MERN
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
            value={formdata.name || ""}
            className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Enter age"
            name="age"
            onChange={handleChange}
            value={formdata.age || ""}
            className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleChange}
            value={formdata.city || ""}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            {editIndex == null ? "Add Data" : "Update Data"}
          </button>
        </form>

        {/* Data List */}
        <div className="mt-6 space-y-4">
          {record.map((e, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p><b>Name:</b> {e.name}</p>
                <p><b>Age:</b> {e.age}</p>
                <p><b>City:</b> {e.city}</p>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(e._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(e._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
