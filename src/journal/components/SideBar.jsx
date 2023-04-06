import { useSelector } from 'react-redux';
import { Avatar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';


export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, email, photoURL, status, uid } = useSelector( state => state.auth );
    const namename = 'Pepe Grillo'


    return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
               { !!photoURL
                ? <Avatar alt={ !!displayName ? displayName : 'No name' } src={photoURL} />
                : <Avatar>{ `${displayName.split(' ')[0][0]}` }</Avatar>
               }
                <Typography variant='h6' noWrap component='div' sx={{ ml: 1 }}>
                    { !!displayName ? displayName : 'No name' }
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                  ['Enero','Febrero','Marzo','Abril'].map( text => (
                    <ListItem key={ text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={ text } />
                                <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                  ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
