import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined, ShoppingCartRounded } from "@mui/icons-material"
import { Button, Divider, Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components"
import { setActiveNote, startSaveNotes } from "../../store/journal";


export const NoteView = () => {

    const distpatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, id, onInputChange, formState } = useForm( note )
    //console.log(title)

    const dateString = useMemo( () => {
        const newDate = new Date(date).toUTCString();
        return newDate
      }, [ date ] )
      //console.log(dateString)

      useEffect(() => {
        distpatch( setActiveNote(formState) );
      }, [formState])

      useEffect(() => {
        console.log(messageSaved)
        if ( messageSaved.length > 0 ) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
      }, [messageSaved])


      const onSaveNote = () => {
          distpatch( startSaveNotes() );
      }


  return (
    <>
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}
        className="animate__animated animate__fadeIn animate__faster">
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
        </Grid>
        <Grid item>
            <Button onClick={onSaveNote} disabled={ isSaving } color="primary" variant="outlined" sx={{ padding: 1 }} >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                value={ body }
                name="body"
                onChange={ onInputChange }
            />
        </Grid>

        <ImageGallery />


    </Grid>
    <Divider/>
    </>
  )
}
