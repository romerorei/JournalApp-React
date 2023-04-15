import { Clear, TurnedInNot, Description } from "@mui/icons-material"
import { Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from 'react-redux'
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNoteFromSideBar } from "../../store/journal"


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
      dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
  }

  const onClickDeleteIcon = () => {
    dispatch( startDeletingNoteFromSideBar(id) );
}

  const newTitle = useMemo( () => {
    return title.length > 17
    ? title.substring(0,17) + '...'
    : title;
  }, [ title ] )

  const newBody = useMemo( () => {
    return body.length > 20
    ? body.substring(0,20) + '...'
    : body;
  }, [ body ] )

  return (
    <ListItem disablePadding>
      <IconButton onClick={ onClickDeleteIcon } color="primary" aria-label="upload picture" component="label">
        <Clear />
      </IconButton>
      <ListItemButton onClick={ onClickNote }>
          <ListItemIcon>
              <Description />
          </ListItemIcon>
          <Grid container>
              <ListItemText primary={ newTitle } />
              <ListItemText secondary={ newBody } />
          </Grid>
      </ListItemButton>
    </ListItem>
  )
}
