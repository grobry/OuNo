import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StudiesContextProvider } from './context/StudyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudiesContextProvider>
      <App />
    </StudiesContextProvider>
  </StrictMode>,
)
