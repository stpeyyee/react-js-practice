// Theme
import { darkTheme, lightTheme } from './themes';

// MUI
import { Paper, ThemeProvider, Grid, Button, Typography } from '@mui/material';

// React hook
import { useCallback, useState } from 'react';

import ThemeSwitch from './components/ThemeSwitch';
import MachinePage from './pages/MachinePage';
import TestPage from './pages/TestPage';

// const DEFAULT_THEME = "light"

function App() {
  let [theme, setTheme] = useState(darkTheme)
 
  let onChangeTheme = useCallback((value) => {
    console.log("value", value)
    if (value) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }, [setTheme])


  return (
    // <TestPage />
    <ThemeProvider theme={theme}>
      <Grid item sm={12} md={12} lg={12} xl={12} align="center" sx={{ background: theme.palette.background.default, borderColor: theme.palette.primary.main }}>
        <ThemeSwitch onChangeTheme={onChangeTheme}></ThemeSwitch>
      </Grid>
      <Paper variant='elevation'
        sx={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container sm={12} md={12} lg={12} xl={12}>
          <Grid item sm={12} md={12} lg={12} xl={12} align="center">
            <MachinePage />
          </Grid>
          <Grid item sm={12} md={12} lg={12} xl={12} align="center">
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
