import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useSignup() {
  const Signup = async (col, user) => {
    const docRef = await addDoc(collection(db, col), user);
    console.log("new user", docRef.id);
  };
  return { Signup };
}

export { useSignup };
