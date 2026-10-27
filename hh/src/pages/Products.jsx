import { Link } from "react-router"

const Products = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-slate-800">Products</h1>
        <p className="mt-2 text-slate-600">Страница продуктов</p>
        <div className="mt-6">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
