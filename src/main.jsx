import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage.jsx'
import AdminEvents from './components/AdminEvents.jsx'
import AdminTeam from './components/AdminTeam.jsx'
import AdminContactInfo from './pages/AdminContactInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/admin/dashboard' element={<AdminPage />} />
          <Route path='/admin/events' element={<AdminEvents />} />
          <Route path='/admin/team' element={<AdminTeam />} />
          <Route path='/admin/tables' element={<AdminContactInfo />} />
      </Routes>
    </Router>
  </StrictMode>,
)
