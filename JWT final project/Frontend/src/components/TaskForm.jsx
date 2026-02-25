import React, { useState } from "react";
import Navbar from "./Navbar";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    if (editId) {
      setTasks(tasks.map((t) => (t.id === editId ? { ...task, id: editId } : t)));
      setEditId(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }

    setTask({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (editId === id) setEditId(null);
  };

  const editTask = (t) => {
    setTask(t);
    setEditId(t.id);
  };

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-start p-6">

      {/* ---------- TASK FORM ---------- */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl space-y-5 border border-indigo-200 hover:shadow-indigo-400 transition-shadow duration-300"
      >
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-4">
          {editId ? "Edit Task" : "Add New Task"} 📝
        </h1>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder-gray-400 text-gray-700 font-medium"
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none placeholder-gray-400 text-gray-700 font-medium resize-none"
          rows={4}
        />

        <div className="flex gap-4">
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 font-medium"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 font-medium"
          />
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-bold text-lg transition-colors duration-200">
          {editId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* ---------- TASK LIST ---------- */}
      <div className="w-full max-w-lg mt-10 space-y-4">
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center">No tasks added yet</p>
        )}

        {tasks.map((t) => (
          <div
            key={t.id}
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 flex justify-between items-center hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="font-bold text-lg text-gray-800">{t.title}</h2>
              {t.description && <p className="text-gray-500 mt-1">{t.description}</p>}
              <p className="text-sm text-gray-400 mt-1">
                Priority: {t.priority} | {t.dueDate && `Due: ${t.dueDate}`}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => editTask(t)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}