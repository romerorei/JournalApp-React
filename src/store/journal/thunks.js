export const startNewNote = () => {
  return async( dispatch, getState ) => {

  // dispatch( savingNewNote() );

  // const { uid } = getState().auth;

    const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
    }

    // const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
    // await setDoc( newDoc, newNote );

    // newNote.id = newDoc.id;

    // //! dispatch
    // dispatch( addNewEmptyNote( newNote ) );
    // dispatch( setActiveNote( newNote ) );

  }
}
