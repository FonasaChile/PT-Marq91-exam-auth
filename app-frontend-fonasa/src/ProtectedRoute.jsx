import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "./context/AuthContext"


const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useAuth()
  console.log(user, isAuthenticated)

  if (loading) return <>
    Loading...
  </>

  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />

  return (
    <Outlet />
  )
}

export default ProtectedRoute
