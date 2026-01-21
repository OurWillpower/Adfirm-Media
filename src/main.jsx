import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// I have removed the import './index.css' line to prevent the crash

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
