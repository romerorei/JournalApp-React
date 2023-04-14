import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"


export const SideBarItem = ({ title, body }) => {

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
      <ListItemButton>
          <ListItemIcon>
              <TurnedInNot />
          </ListItemIcon>
          <Grid container>
              <ListItemText primary={ newTitle } />
              <ListItemText secondary={ newBody } />
          </Grid>
      </ListItemButton>
    </ListItem>
  )
}
