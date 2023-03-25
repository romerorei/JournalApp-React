import { createTheme } from "@mui/material";
import { red, blue } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    secundary: {
      main: '#543884'
    },
    error: {
      main: red.A400
    }
  }
})
