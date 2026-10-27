import { Link } from "react-router"

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="mt-2 text-xl text-slate-600">Страница не найдена</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        На главную
      </Link>
    </div>
  )
}

export default NotFound
