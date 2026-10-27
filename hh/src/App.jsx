import { BrowserRouter, Routes, Route } from "react-router"
import AuthFlow from "./pages/AuthFlow"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Home from "./pages/Home"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthFlow>
              <Login />
            </AuthFlow>
          }
        />

        <Route
          path="/"
          element={
            <AuthFlow>
              <Home />
            </AuthFlow>
          }
        />

        <Route
          path="/users"
          element={
            <AuthFlow>
              <Users />
            </AuthFlow>
          }
        />

        <Route
          path="/products"
          element={
            <AuthFlow>
              <Products />
            </AuthFlow>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
