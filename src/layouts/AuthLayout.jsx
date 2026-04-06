import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#070707] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="w-9 h-9 bg-volt rounded-xl flex items-center justify-center">
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

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/0 to-white/0 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
