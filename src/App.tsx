import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { Global } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router/Routes'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultThemes}>
        <Router />
        <Global />
      </ThemeProvider>
    </BrowserRouter>
  )
}
