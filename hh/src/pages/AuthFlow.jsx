import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

const AuthFlow = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const isLoginPage = location.pathname === "/login"

    if (token && isLoginPage) {
      navigate("/", { replace: true })
    } else if (!token && !isLoginPage) {
      navigate("/login", { replace: true })
    }
  }, [location.pathname, navigate])

  const token = localStorage.getItem("token")
  const isLoginPage = location.pathname === "/login"

  if (!token && !isLoginPage) return null
  if (token && isLoginPage) return null

  return <>{children}</>
}

export default AuthFlow
