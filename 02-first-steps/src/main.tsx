import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
// import { MyAwesomeApp } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* Tarea (https://gist.github.com/Klerith/d2a55b4eceae48c2f0430e5e386c609b) */}
    {/* <MyAwesomeApp /> */}
  </StrictMode>
)
