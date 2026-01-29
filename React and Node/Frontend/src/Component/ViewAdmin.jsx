import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewAdmin() {
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:1234/getData");
      setRecord(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch data");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:1234/deleteData?id=${id}`
      );
      const newData = record.filter((item) => item._id !== id);
      setRecord(newData);
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item._id === id);
    navigate("/editAdmin", { state: singleData });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 text-xl font-bold border-b border-slate-700">
          View Admin Panel
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button
            className="block w-full text-left px-4 py-2 rounded hover:bg-slate-700"
            onClick={() => navigate("/dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            className="block w-full text-left px-4 py-2 rounded hover:bg-slate-700"
            onClick={() => navigate("/AddAdmin")}
          >
            ➕ Add Admin
          </button>
          <button
            className="block w-full text-left px-4 py-2 rounded bg-slate-700"
          >
            👁 View Admin
          </button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">View Admin</h1>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center font-bold">
              H
            </div>
            <button
              className="text-sm bg-red-500 text-white px-4 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">ID</th>
                  <th className="border px-3 py-2">Username</th>
                  <th className="border px-3 py-2">Email</th>
                  <th className="border px-3 py-2">Age</th>
                  <th className="border px-3 py-2">Edit</th>
                  <th className="border px-3 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {record.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No data found
                    </td>
                  </tr>
                ) : (
                  record.map((e, idx) => (
                    <tr key={e._id} className="text-center">
                      <td className="border px-3 py-2">{idx + 1}</td>
                      <td className="border px-3 py-2">{e.name}</td>
                      <td className="border px-3 py-2">{e.email}</td>
                      <td className="border px-3 py-2">{e.age}</td>
                      <td className="border px-3 py-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded text-xs"
                          onClick={() => handleEdit(e._id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td className="border px-3 py-2">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                          onClick={() => handleDelete(e._id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>

        <footer className="text-center text-xs py-3 text-gray-500">
          © Your Website 2019
        </footer>
      </div>
    </div>
  );
}
