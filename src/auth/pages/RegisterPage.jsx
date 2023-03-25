import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Sign in">
          <form>
              <Grid container>

              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField
                    label="Name"
                    type="text"
                    placeholder='First Name'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField
                    label="Correo"
                    type="email"
                    placeholder='correo@email.com'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField
                    label="Password"
                    type="password"
                    placeholder='password'
                    fullWidth
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={ 12 } >
                    <Button variant='contained' fullWidth>
                      Crear Cuenta
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{ mr: 0.5 }}>¿Ya tienes cuenta?</Typography>
                  <Link component={ RouterLink } color='inherit' to="/auth/login">
                    Inicia Sesion
                  </Link>

                </Grid>

              </Grid>
          </form>

      </AuthLayout>
  )
}
