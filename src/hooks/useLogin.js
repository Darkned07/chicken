import { useDispatch, useSelector } from "react-redux";
import { logAuth } from "../redux/features/authSlice";
import { toast } from "react-toastify";

function useLogin() {
  const dispatch = useDispatch();
  const { users } = useSelector((doc) => doc.auth);

  const data = users;
  const res = (email, password) => {
    data.forEach((element) => {
      if (element.email === email) {
        if (element.password === password) {
          toast.success(`Salom ${element.name}`);
          dispatch(logAuth(element));
        } else {
          toast.error("Emailda Yoki Parolda xatolik bor!");
        }
      }
    });
  };

  return { res };
}

export { useLogin };
