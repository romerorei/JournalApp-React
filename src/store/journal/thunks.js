import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async( dispatch, getState ) => {

  // dispatch( savingNewNote() );

    console.log(getState());
    const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
    const setDocResp = await setDoc( newDoc, newNote );
    console.log({newDoc, setDocResp} );
    // newNote.id = newDoc.id;

    // //! dispatch
    // dispatch( addNewEmptyNote( newNote ) );
    // dispatch( setActiveNote( newNote ) );

  }
}
