import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  email: 'user@user.com',
  password: '123456',
  displayName: 'Reinaldo Romero'
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Sign in">
          <form onSubmit={ onSubmit }>
              <Grid container>

              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label="Name"
                  type="text"
                  placeholder='First Name'
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange }
                />
              </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField
                    label="Correo"
                    type="email"
                    placeholder='correo@email.com'
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField
                    label="Password"
                    type="password"
                    placeholder='password'
                    fullWidth
                    name="password"
                    value={ password }
                    onChange={ onInputChange }
                  />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  <Grid item xs={ 12 } >
                    <Button type='submit' variant='contained' fullWidth>
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
