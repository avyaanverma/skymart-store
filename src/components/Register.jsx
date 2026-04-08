import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";


const Register = () => {
  const {users, setUsers} = useAuth();

  console.log(users);
  let navigate = useNavigate();

  let {
    register,
    reset,
    handleSubmit,
    getValues,
    formState : {errors, isValid} 
  } = useForm({
    mode: "onChange"
  });

  const handleFormSubmit = (data)=> {
    setUsers([...users, {
      name: data.name,
      password: data.password,
      email: data.email
    }])
    console.log(users);
    
    localStorage.setItem("token", true)
    localStorage.setItem("users", users);

    reset();
    navigate("/login")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Create account</h2>
        <p className="mt-2 text-sm text-white/60">
          Join SkyMart and start shopping.
        </p>
      </div>
      {/* Register Form */}
      <form className="space-y-4"  onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
            {...register("name", {
              required: "Enter Name to sign up"
            })}
          />
          {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            @
          </span>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
            {...register("email", {
                  required: "Enter Email to sign up",
                })}
          />
          {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
            {...register("password", {
                  required: "Enter Password to sign up",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are required."
                  }
            })}
          />
          {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            *
          </span>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#c8f400] transition"
            {...register("confirmPassword", {
                  required: "Confirm Password to sign up",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are required."
                  },
                  validate: (value)=>{
                    return value == getValues("password") || "Passwords do not match";
                  }
            })}
          />
          {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="button"
          className="mt-2 w-full rounded-2xl bg-[#c8f400] py-3 text-sm font-semibold text-[#0b0b0b] transition hover:brightness-95"
          onClick={handleSubmit(handleFormSubmit)}
        >
          Create Account
        </button>
      </form>

      <div className="text-center text-sm text-white/60">
        Already have an account?{' '}
        <a className="text-[#c8f400] hover:text-[#d7ff2f] transition cursor-pointer"
          onClick={()=>{
                navigate("/login")}}
        >
          Sign in
        </a>
      </div>
    </div>
  )
}

export default Register
