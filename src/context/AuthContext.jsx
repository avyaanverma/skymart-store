import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
  const [users, setUsers] = useState(localStorage.getItem("users") || []);
  const isLoggedIn = localStorage.getItem("token");
  return (
    <AuthContext.Provider value={{users, setUsers, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);