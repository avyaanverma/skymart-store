import React from 'react'

const Register = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Create account</h2>
        <p className="mt-2 text-sm text-white/60">
          Join SkyMart and start shopping.
        </p>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            @
          </span>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
          />
        </div>

        <button
          type="button"
          className="mt-2 w-full rounded-2xl bg-[#c8f400] py-3 text-sm font-semibold text-[#0b0b0b] transition hover:brightness-95"
        >
          Create Account ->
        </button>
      </form>

      <div className="text-center text-sm text-white/60">
        Already have an account?{' '}
        <a className="text-[#c8f400] hover:text-[#d7ff2f] transition" href="/auth">
          Sign in
        </a>
      </div>
    </div>
  )
}

export default Register
