import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

const AppLayout = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setUserLoggedIn(isLoggedIn);
    
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate]);
  
  return (
    <div>AppLayout
      <Outlet/>
    </div>
  )
}

export default AppLayout
