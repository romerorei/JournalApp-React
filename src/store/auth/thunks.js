import { signInWithGoogle, registerUserWithEmailPassword, LoginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() )

  }
}

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoogle();
    console.log({ result })
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

    dispatch( login( result ) )

  }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await registerUserWithEmailPassword({ email, password, displayName });
      console.log(result)
     if ( !result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }));

      dispatch( login( result ))

  }

}

export const startLoginWithEmailPassword = ({ email, password}) => {
  return async( dispatch ) => {

      dispatch( checkingCredentials() );

      const result = await LoginWithEmailPassword({ email, password });
      console.log(result)
     if ( !result.ok ) return dispatch( logout( result ));
      dispatch( login( result ))

  }

}

export const startLogout = () => {
  return async( dispatch ) => {
      await logoutFirebase();
      dispatch( clearNotesLogout() );
      dispatch( logout() );
  }
}
