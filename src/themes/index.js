import { createTheme } from "@mui/material";

export const customizeComponent = {
  MuiButton: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        fontSize: 10,
        borderRadius: 20,
      },
    },
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary and secondary will appear when component use color prop
    primary: {
      main: '#004f96',
    },
    secondary: {
      main: '#51b4ec',
    },
    error: {
      main: '#000000',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#f2f2f2'
    },
    success: {
      main: '#4caf50'
    },
    background: {
      default: "#f2f2f2",
      paper: "#f2f2f2",
    },
  },
  components: customizeComponent
});


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: "#51b4ec",
    },
    error: {
      main: '#000000',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#242f39'
    },
    success: {
      main: '#4caf50'
    },
    background: {
      default: "#000A15",
      paper: "#000A15",
    },
  },
  components: customizeComponent
});