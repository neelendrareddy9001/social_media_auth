import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks";
import { auth } from "../firebase/firebase";

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  return <div>useSignupWithEmailAndPassword</div>;
};

export default useSignupWithEmailAndPassword;
