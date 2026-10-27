import { useEffect, useState } from "react"
import axios from "axios"
import { api, getAuthHeaders } from "../api/auth"

const emptyForm = {
  name: "",
  email: "",
  password: "",
  role: "user",
  city: "",
}

const Users = () => {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function getUsers() {
    try {
      const response = await axios.get(`${api}/users`, {
        headers: getAuthHeaders(),
      })

      setUsers(response.data)
    } catch (err) {
      console.error(err)
      setError("Не удалось загрузить пользователей")
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  function openEdit(user) {
    setEditId(user.id)
    setForm({
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
      city: user.city,
    })
    setError("")
  }

  async function saveUser(e) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const payload = {
      name: form.name,
      email: form.email,
      role: form.role,
      city: form.city,
    }

    if (form.password.trim()) {
      payload.password = form.password
    }

    try {
      if (editId !== null) {
        await axios.put(`${api}/users/${editId}`, payload, {
          headers: getAuthHeaders(),
        })
      } else {
        await axios.post(`${api}/users`, form, {
          headers: getAuthHeaders(),
        })
      }

      setForm(emptyForm)
      setEditId(null)
      await getUsers()
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
          "Ошибка сохранения. Проверь права доступа."
        )
      } else {
        setError("Произошла ошибка")
      }
    } finally {
      setLoading(false)
    }
  }

  async function deleteUser(id) {
    if (!window.confirm("Удалить пользователя?")) return

    setError("")

    try {
      await axios.delete(`${api}/users/${id}`, {
        headers: getAuthHeaders(),
      })

      await getUsers()
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
          "Не удалось удалить пользователя"
        )
      } else {
        setError("Произошла ошибка")
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Users CRUD</h1>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
            {error}
          </p>
        )}

        <form
          onSubmit={saveUser}
          className="mb-8 grid gap-3 rounded-xl bg-white p-5 shadow sm:grid-cols-2"
        >
          <input
            className="rounded-lg border p-3"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            className="rounded-lg border p-3"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            className="rounded-lg border p-3"
            type="password"
            placeholder={editId !== null ? "New password (optional)" : "Password"}
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required={editId === null}
          />

          <input
            className="rounded-lg border p-3"
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            required
          />

          <select
            className="rounded-lg border p-3"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="flex gap-3">
            <button
              disabled={loading}
              className="rounded-lg bg-blue-600 px-5 py-3 text-white disabled:opacity-50"
              type="submit"
            >
              {loading
                ? "Saving..."
                : editId !== null
                  ? "Save changes"
                  : "Add user"}
            </button>

            {editId !== null && (
              <button
                type="button"
                className="rounded-lg border px-5 py-3"
                onClick={() => {
                  setEditId(null)
                  setForm(emptyForm)
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="overflow-x-auto rounded-xl bg-white shadow">
          <table className="w-full text-left">
            <thead className="bg-slate-200">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">City</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.city}</td>
                  <td className="flex gap-2 p-3">
                    <button
                      onClick={() => openEdit(user)}
                      className="rounded bg-amber-500 px-3 py-2 text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="rounded bg-red-600 px-3 py-2 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-slate-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
