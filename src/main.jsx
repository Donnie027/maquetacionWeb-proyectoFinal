import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'

import { AppControl } from './AppControl'

import './index.css'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppControl/>
    </HashRouter>
  </StrictMode>
)
