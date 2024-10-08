import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicial from './Pages/Inicial/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicial />
  </StrictMode>,
)
