import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useUsers } from "./hooks/useUsers";
import { useDispatch } from "react-redux";
import { usersAuth } from "./redux/features/authSlice";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const { doc } = useUsers();
  const { user } = useSelector((data) => data.auth);

  dispatch(usersAuth(doc));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
