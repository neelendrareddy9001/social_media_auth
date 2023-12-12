import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import useAuthStore from "../Store/authStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (Inputs) => {
    if (!Inputs.email || !Inputs.password) {
      return showToast("Error", "Please fill all the fields", "error");
    }

    try {
      const userCred = await signInWithEmailAndPassword(
        Inputs.email,
        Inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSanp = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSanp.data()));
        loginUser(docSanp.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, error, login };
};

export default useLogin;
