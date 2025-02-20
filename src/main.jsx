import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

import 'animate.css';

import { AppControl } from './AppControl'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppControl/>
    </HashRouter>
  </StrictMode>
)
