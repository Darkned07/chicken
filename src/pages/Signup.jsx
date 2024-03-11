import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logAuth } from "../redux/features/authSlice";

function Signup() {
  const dispatch = useDispatch();
  const { users } = useSelector((doc) => doc.auth);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const refs = useRef();
  const { Signup } = useSignup();
  const handleSignup = (e) => {
    e.preventDefault();

    const use = users.filter((d) => d.name === name.current.value);
    const ema = users.filter((d) => d.email === email.current.value);
    const ref = users.filter((d) => d.id === refs.current.value);
    const date = new Date();
    console.log(use);
    if (name.current.value.trim().length >= 5) {
      if (use && use.length >= 1) {
        toast.error("bu namedan avval foydalanilgan!");
      } else {
        if (ema && ema.length >= 1) {
          toast.error("bu emaildan avval foydalanilgan!");
        } else {
          if (ref && ref.length >= 1) {
            if (password.current.value.trim().length >= 6) {
              Signup("users", {
                name: name.current.value,
                email: email.current.value,
                friend: refs.current.value,
                withdraw: 0,
                password: password.current.value,
                balansone: 5000,
                balanstwo: 0,
                time: date.toDateString(),
              });
              dispatch(
                logAuth({
                  name: name.current.value,
                  email: email.current.value,
                  friend: refs.current.value,
                  withdraw: 0,
                  password: password.current.value,
                  balansone: 5000,
                  balanstwo: 0,
                  time: date.toDateString(),
                })
              );
            } else {
              toast.error("Password kamida 6ta belgidan iborat bolishi kerak!");
            }
          } else {
            toast.error("bunday ref kaliti mavjud emas boshqa kiriting!");
          }
        }
      }
    } else {
      toast.error("Name kamida 5ta harfdan iborat bolishi kerak!");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-[30px] text-secondary text-center font-bold mt-[20px]">
              Sign Up
            </h2>
            <form onSubmit={handleSignup} className="card-body">
              <label className="input input-bordered input-secondary flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  ref={name}
                  type="text"
                  className="grow text-secondary"
                  placeholder="Username"
                />
              </label>
              <label className="input input-bordered input-secondary flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  ref={email}
                  type="email"
                  className="grow text-secondary"
                  placeholder="Email"
                />
              </label>
              <label className="input input-bordered input-secondary flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  ref={password}
                  type="password"
                  className="grow text-secondary"
                  placeholder="Password"
                />
              </label>
              <label className="input input-bordered input-secondary flex items-center gap-2">
                Ref kaliti:
                <input
                  ref={refs}
                  type="text"
                  className="grow text-secondary"
                  placeholder="uid kaliti"
                />
              </label>
              <div className="form-control mt-6 flex flex-col gap-[10px]">
                <button className="btn btn-outline btn-secondary">
                  Sign up
                </button>
                <Link to="/login" className="btn btn-secondary btn-outline">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
