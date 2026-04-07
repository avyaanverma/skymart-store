import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext';


const AppLayout = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();
  
  useEffect(() => {
    
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Outlet/>
    </div>
  )
}

export default AppLayout
