import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNotes } from "./journalSlice";
import { loadNotes, fileUpload } from "../../helpers";

export const startNewNote = () => {
  return async( dispatch, getState ) => {

    dispatch( savingNewNote() );

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
    newNote.id = newDoc.id;

    //! dispatch
    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );

  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

      const { uid } = getState().auth;
      // console.log({uid})
      if ( !uid ) throw new Error('El UID del usuario no existe');

      const notes = await loadNotes( uid );
      //console.log(notes)
      dispatch( setNotes( notes ) );
  }
}

export const startSaveNotes = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() );

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id // propiedad de js para elimiar una llave de un objecto
    //console.log(noteToFireStore)
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await setDoc( docRef, noteToFireStore, { merge: true } );

    dispatch( updateNotes(note) );

  }
}

export const startUploadingFiles = ( files = []) => {
  return async( dispatch ) => {
    dispatch( setSaving() );

    // await fileUpload( files[0] );
    const fileUploadPromises = [];
    for ( const file of files ) {
      fileUploadPromises.push( fileUpload( file ) )
    }
    console.log(fileUploadPromises)

    const photosUrls = await Promise.all( fileUploadPromises );
    console.log( photosUrls )

    dispatch( setPhotosToActiveNote( photosUrls ) );

  }
}
