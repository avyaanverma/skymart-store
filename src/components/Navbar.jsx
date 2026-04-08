import React from 'react'
import { NavLink } from 'react-router'

const Navbar = ({ onCartClick, cartCount = 0 }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-volt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap text-ink fill-ink"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Sky<span className="text-[#c8f400]">Mart</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <NavLink to="/" className={({isActive})=> isActive ? "hover:text-white text-[#c8f400]" : "hover:text-white" } >Home</NavLink>
            <NavLink to="/shop"  className={({isActive})=> isActive ? "text-[#c8f400] hover:text-white" : "hover:text-white"}>Shop</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "text-[#c8f400] hover:text-white" : "hover:text-white"}>About</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8f400] text-xs font-semibold text-[#0b0b0b]">
                A
              </div>
              <span className="text-sm text-white/80">avyaan</span>
            </div>
            <button
              type="button"
              onClick={onCartClick}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70"
              aria-label="Open cart"
            >
              <i className="ri-shopping-cart-2-line text-lg"></i>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-volt px-1 text-[11px] font-semibold text-[#0b0b0b]">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70"
            >
              <i className="ri-logout-circle-r-line text-lg"></i>
            </button>
          </div>
        </nav>
      </header>
  )
}

export default Navbar
