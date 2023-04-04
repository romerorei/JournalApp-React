import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    // console.log({ credentials });

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error){
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential)
    console.log(error)

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

  try {
      const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
      const { uid, photoURL } = resp.user;

      await updateProfile( FirebaseAuth.currentUser, { displayName });

      return {
          ok: true,
          uid, photoURL, email, displayName
      }

  } catch (error) {
      console.log(error);
      return { ok: false, errorMessage: error.message }
  }

}
