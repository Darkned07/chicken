import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useUsers() {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        result.push(data);
      });
      setDoc(result);
    });
    return () => unsubscribe();
  }, []);
  return { doc };
}
