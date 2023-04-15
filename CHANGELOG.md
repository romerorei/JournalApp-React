- Se agrega el proyecto inicial MaterialUI, estructura y diseño

## [19-redux-and-auth-with-firebase]
- Se instala redux al proyecto:
- yarn add @reduxjs/toolkit
- yarn add react-redux
- Creacion del Store y Slice de auth
- Add src/store/store.js
- Add src/store/auth/authSlice.js
- Add Hooks folder and custom hooks useForm
- Add thunks para los estados del auth
- Add firebase
- Add google sign in
- Add state a los reduces de src/store/auth/authSlice.js
- Add disabled botton si el modal de GoogleLogin esta abierto
- Manejo de estado del formulario register
- Validaciones del formulario RegisterPage.jsx
- Mostar errores en pantalla
- Add registerUserWithEmailPassword register con user email y password: se crean los usuarios en firebase
- Actualizar el displayName y autenticar el usuario
- Mostrar mensaje de error en la vista de registro de usuario
- Realizar el login de usuario con correo y contraseña
- Agrego el Loader: CheckingAuth src/ui/components/CheckingAuth.jsx [class](https://www.udemy.com/course/react-cero-experto/learn/lecture/32298388#questions)
- Manterner el estado de la autenticacion al recargar [class 290](https://www.udemy.com/course/react-cero-experto/learn/lecture/20428715#questions)
- Custon hooks para la autenticacion [class 291](https://www.udemy.com/course/react-cero-experto/learn/lecture/32298508#questions)
- Logout de Firebase [292](https://www.udemy.com/course/react-cero-experto/learn/lecture/20120432#questions)


 ## [20-redux-crud-on-firestore]
 - Se agrega el journalSlice, thunks de journal [298](https://www.udemy.com/course/react-cero-experto/learn/lecture/32310794#questions)
 - Preparar la base de datos Cloud Firestore [299](https://www.udemy.com/course/react-cero-experto/learn/lecture/32311346#questions)
 - Crear una nueva nota [300](https://www.udemy.com/course/react-cero-experto/learn/lecture/20125334#questions)
 - Activar la nota creada [301](https://www.udemy.com/course/react-cero-experto/learn/lecture/20125338#questions)
 - Carga notas de FireStore [302](https://www.udemy.com/course/react-cero-experto/learn/lecture/20126428#questions)
 - Mostrar las notes en el menu lateral [303](https://www.udemy.com/course/react-cero-experto/learn/lecture/20127394#questions)
 - Activar una nota [304](https://www.udemy.com/course/react-cero-experto/learn/lecture/20128022#questions)
 - Actrivar una nota para su edicion [305](https://www.udemy.com/course/react-cero-experto/learn/lecture/32313914#questions)
 - Actualizar la nota actual [305](https://www.udemy.com/course/react-cero-experto/learn/lecture/20143640#questions)
 - Agregar SweetAlert 2 [308](https://www.udemy.com/course/react-cero-experto/learn/lecture/32313546#questions)
 - Cloudinary | Backend para subir imagenes [309](https://www.udemy.com/course/react-cero-experto/learn/lecture/20145306#questions)
 - Seleccionar archivos desde React [310](https://www.udemy.com/course/react-cero-experto/learn/lecture/32313692#questions)
 - subir imagen a Cloudinary [311](https://www.udemy.com/course/react-cero-experto/learn/lecture/20146350#questions)
