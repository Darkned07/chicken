import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/features/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((data) => data.auth);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="max-container">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-[18px]  md:text-xl ">
              Chicken Farm
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li> */}
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <h2>Deposit:0$</h2>
                </li>
                <li>
                  <h2>Withdraw:0$</h2>
                </li>
                <li>
                  <Link to="/mychick">My Chicken</Link>
                </li>
                <li>
                  <Link to="/Market">My Market</Link>
                </li>
                <li>
                  <Link to="/swap">Swap</Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <div className="flex flex-col ">
            <h3 className="font-bold text-lg">Salom {user.name}!</h3>
            <p className="py-4">
              {user.name} rostdan ham platformadan chiqishni xoxlaysizmi ?
            </p>

            <button
              onClick={handleLogout}
              className="btn btn-warning text-white"
            >
              Ha
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-accent text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
