import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  let navigate = useNavigate();
  let {
    register,
    reset,
    handleSubmit,
    setError,
    formState : {errors, isValid} 
  } = useForm();
  const {users} = useAuth();

  const handleFormSubmit = (data)=> {
    const {email, password} = data;

    const user = users.find((user)=>{
      return user.email == email;
    })
    // if not email
    if(!user){
      setError("email", {type: "manual", message: "Email not found"});
      return;
    }
    // if not password match
    if(password != user.password){
      setError("password", {type: "manual", message: "Password doesn't match"})
      return;
    }

    localStorage.setItem("token", true)

    reset();
    navigate("/")
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#070707] text-white">
      <div className="h-full w-full grid grid-cols-[1.1fr_auto_1fr]">
        <section className="h-full bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#141414] px-12 py-10 flex flex-col">
          <div className="flex items-center gap-3">
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
            <span className="text-2xl font-semibold tracking-tight">SkyMart</span>
          </div>

          <div className="mt-16 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-[0.35em] text-[#c8f400] uppercase">
                Welcome Back
              </p>
              <h1 className="text-[clamp(2.6rem,4.5vw,4rem)] font-semibold leading-[1.05]">
                Shop the future.
                <br />
                <span className="text-[#c8f400]">Today.</span>
              </h1>
              <p className="text-base text-white/60 max-w-md">
                Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5 max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                <p className="text-xl font-semibold text-[#c8f400]">20K+</p>
                <p className="text-xs text-white/60 mt-1">Products</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                <p className="text-xl font-semibold text-[#c8f400]">50K+</p>
                <p className="text-xs text-white/60 mt-1">Users</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                <p className="text-xl font-semibold text-[#c8f400]">4.9</p>
                <p className="text-xs text-white/60 mt-1">Rating</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <section className="h-full bg-[#0a0a0a] flex items-center justify-center px-10">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/0 to-white/0 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div>
              <h2 className="text-2xl font-semibold">Sign in</h2>
              <p className="mt-2 text-sm text-white/60">Enter your credentials to continue</p>
            </div>

            {/* LOGIN FORM */}
            <form className="mt-6 space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
                {...register("email", {
                  required: "Enter Email to sign in",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
                {...register("password", {
                  required: "Enter Password to sign in",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are required."
                  }
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[#c8f400] py-3 text-sm font-semibold text-[#0b0b0b] transition hover:brightness-95"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-white/60">
              Don't have an account?{' '}
              <a className="text-[#c8f400] hover:text-[#d7ff2f] transition cursor-pointer" onClick={()=>{
                navigate("/register")}}>
                Create one
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
