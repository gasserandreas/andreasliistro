// import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(253, 252, 255)',
    },
    primary: {
      light: '#2583C9',
      main: '#034687',
      dark: '#034687',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#DBE8E1',
      main: '#DBE8E1',
      dark: '#A5C7B4',
      contrastText: '#000000',
    },
    error: {
      light: '##ff2638',
      main: '#E10032',
      dark: '##c6001c',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#151B25',
      secondary: '##676d7a',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '1.5rem',
        },
      },
    },
  },
});

export default theme;