import { RouterProvider } from "react-router"
import router from "./routes/AppRoutes"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App