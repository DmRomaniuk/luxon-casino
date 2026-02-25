import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          width: '100%',
          maxWidth: 385.5,
          height: 56,
          borderRadius: 12,
          padding: '16px 48px',
          gap: 8,
          color: 'white',
          background: 'linear-gradient(to right, #FF8D6B, #FFBA47)',
          boxShadow: 'none',
          fontFamily: '"SF Pro Display", sans-serif',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '22px',
          textAlign: 'center',
          textTransform: 'none',
          '&:hover': {
            background: 'linear-gradient(to right, #FF8D6B, #FFBA47)',
            boxShadow: 'none',
            opacity: 0.9,
          },
        },
      },
    },
  },
});

export default theme;
