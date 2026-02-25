import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import 'flag-icons/css/flag-icons.min.css'
import App from './App.tsx'
import theme from './theme/theme.ts'
import { LocaleProvider } from './contexts/LocaleContext.tsx'
import './i18n/config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </LocaleProvider>
  </React.StrictMode>,
)
