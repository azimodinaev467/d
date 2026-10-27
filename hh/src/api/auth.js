import axios from "axios"

export const api = "https://test-swagger-2ph6.onrender.com"

export async function LoginRequest(obj) {
  try {
    const { data } = await axios.post(`${api}/auth/login`, obj)

    const token =
      data?.token ??
      data?.accessToken ??
      data?.data?.token ??
      data?.data?.accessToken

    if (token) {
      localStorage.setItem("token", token)
    }

    return token || null
  } catch (error) {
    console.error("Login error:", error)
    return null
  }
}

export function getAuthHeaders() {
  const token = localStorage.getItem("token")

  return {
    Authorization: `Bearer ${token}`,
  }
}
