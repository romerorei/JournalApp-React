import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from "../layout/AuthLayout"

import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";


export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'user@user.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({ email, password })
  }

     const onGoogleLogin = () => {
      dispatch( startGoogleSignIn());
      console.log('button google')
     }

  // useEffect(() => {
  //   dispatch( checkingAuthentication() )
  // }, [])


  return (
      <AuthLayout title="Login">
          <form onSubmit={ onSubmit }>
              <Grid container>
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
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button
                      disabled={isAuthenticating}
                      type="submit"
                      variant='contained'
                      fullWidth
                      onClick={ () => dispatch( checkingAuthentication() ) }>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={ 12 } sm={ 6 }>
                    <Button
                        disabled={ isAuthenticating }
                        onClick={ onGoogleLogin }
                        variant='contained'
                        fullWidth>
                      <Google />
                      <Typography sx={{ ml: 1 }}>Google</Typography>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={ RouterLink } color='inherit' to="/auth/register">
                    Crear una cuenta
                  </Link>

                </Grid>

              </Grid>
          </form>

      </AuthLayout>





  )
}
