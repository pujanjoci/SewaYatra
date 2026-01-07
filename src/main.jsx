import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename is set for GitHub Pages deployment */}
    <BrowserRouter basename="/SewaYatra">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
