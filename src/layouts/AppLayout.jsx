import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import CartDrawer from '../components/CartDrawer'
import { cartItems } from '../data/cartMock'


const AppLayout = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  useEffect(() => {
    
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <div className={`min-h-screen bg-[#070707] text-white ${isCartOpen ? 'overflow-hidden' : ''}`}>
      <Navbar
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartItems.length}
      />
      <Outlet/>

      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <CartDrawer onClose={() => setIsCartOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default AppLayout
