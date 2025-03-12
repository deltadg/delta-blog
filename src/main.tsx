import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import BlogContextProvider from './components/BlogContext/BlogContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </StrictMode>,
)
