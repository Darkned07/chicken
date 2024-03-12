import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useRef } from "react";
import { toast } from "react-toastify";
function Login() {
  const { res } = useLogin();
  const email = useRef();
  const password = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email.current.value.trim().length > 2 &&
      password.current.value.trim().length > 4
    ) {
      res(email.current.value, password.current.value);
    } else {
      toast.error("Parolda yoki Emailda xatolik bor!");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-[30px] text-secondary text-center font-bold mt-[20px]">
              Login
            </h2>
            <form
              onSubmit={handleLogin}
              className="card-body sm:w-full w-[300px]"
            >
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
                  type="text"
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
              <Link className="text-[10px] link link-secondary" to="/">
                Parol esdan chiqdimi ?
              </Link>
              <div className="form-control mt-6 flex flex-col gap-[10px]">
                <button className="btn btn-outline btn-secondary">Login</button>
                <Link to="/signup" className="btn btn-outline btn-secondary">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
