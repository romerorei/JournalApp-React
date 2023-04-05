- Se agrega el proyecto inicial MaterialUI, estructura y diseño

- [19-redux-and-auth-with-firebase]
    Se instala redux al proyecto:
    yarn add @reduxjs/toolkit
    yarn add react-redux
    Creacion del Store y Slice de auth
    Add src/store/store.js
    Add src/store/auth/authSlice.js
    Add Hooks folder and custom hooks useForm
    Add thunks para los estados del auth
    Add firebase
    Add google sign in
    Add state a los reduces de src/store/auth/authSlice.js
    Add disabled botton si el modal de GoogleLogin esta abierto
    Manejo de estado del formulario register
    Validaciones del formulario RegisterPage.jsx
    Mostar errores en pantalla
    Add registerUserWithEmailPassword register con user email y password: se crean los usuarios en firebase
    Actualizar el displayName y autenticar el usuario
    Mostrar mensaje de error en la vista de registro de usuario
    Realizar el login de usuario con correo y contraseña
    Agrego el Loader: CheckingAuth src/ui/components/CheckingAuth.jsx [class](https://www.udemy.com/course/react-cero-experto/learn/lecture/32298388#questions)
    Manterner el estado de la autenticacion al recargar [class 290](https://www.udemy.com/course/react-cero-experto/learn/lecture/20428715#questions)

