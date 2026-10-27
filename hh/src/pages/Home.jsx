import { Link } from "react-router"

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-slate-800">home page</h1>
        <p className="mt-2 text-slate-600"></p>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/users"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Пользователи (Users CRUD)
          </Link>
          <Link
            to="/products"
            className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
          >
            Товары (Products)
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token")
              window.location.href = "/login"
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Выйти (Logout)
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
