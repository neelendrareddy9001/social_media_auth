import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth } from "../firebase/firebase";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  return <div>useLogin</div>;
};

export default useLogin;
