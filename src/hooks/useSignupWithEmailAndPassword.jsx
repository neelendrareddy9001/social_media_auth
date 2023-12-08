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

const useSignupWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await userDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
