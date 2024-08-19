import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage.jsx'
import Alumnilist from './pages/Alumnilist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/admin/aluminilist' element={<Alumnilist/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
