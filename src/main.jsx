//programming-react.s2422.workers.dev

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './reset.css';
import TodoListApp from './TodoLisiApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)
