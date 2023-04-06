import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: true,
       messsageSaved: '',
       notes: [],
       active: null,
   },
   reducers: {
      addNewEmptyNote: (state,  action ) => {

      },
      setActiveNote: (state,  action ) => {

      },
      setNotes: (state,  action ) => {

      },
      setSaving: ( state ) => {

      },
      updateNotes: (state,  action ) => {

      },
      deleteNoteById: (state,  action ) => {

      },
   }
});


export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
  deleteNoteById, } = journalSlice.actions;
