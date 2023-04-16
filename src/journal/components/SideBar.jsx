import { useSelector } from 'react-redux';
import { Avatar, Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { SideBarItem } from './SideBarItem';


export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName, email, photoURL, status, uid } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );


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
            <Toolbar>
                <Typography variant='span' noWrap component='span' sx={{ ml: 1 }}>
                    { !!notes ? `Notas:${notes.length}` : 'No tienes notas' }
                </Typography>
            </Toolbar>

            <List>
                {
                  notes.map( note => (
                    <SideBarItem key={ note.id } { ...note } />
                  ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
