import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../Store/authStore";

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (Inputs) => {
    if (
      !Inputs.email ||
      !Inputs.password ||
      !Inputs.username ||
      !Inputs.fullName
    ) {
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        Inputs.email,
        Inputs.password
      );
      if (!newUser && error) {
        console.log(error);
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: Inputs.email,
          username: Inputs.username,
          fullName: Inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
