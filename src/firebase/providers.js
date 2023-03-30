import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    // console.log({ credentials });

    const { displayName, email, photoURL, uid } = result.user;
    //console.log({ user })

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error){
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    // const email = error.customData.email;
    // console.log(email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential)
    // ...
    console.log(error)

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}
