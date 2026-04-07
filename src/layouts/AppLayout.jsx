import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext';


const AppLayout = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();
  
  useEffect(() => {
    
    if (!isLoggedIn) {
      navigate("/login");
    }else{
      navigate("/")
    }
  }, [navigate]);
  
  return (
    <div>AppLayout
      <Outlet/>
    </div>
  )
}

export default AppLayout
