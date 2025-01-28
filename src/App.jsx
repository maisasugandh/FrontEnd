import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { LandingPage } from './components/LandingPage'


function App() {
  return (
    <Routes>
      {/* Redirect from root to landing page */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* Main routes */}
      <Route path="/home" element={<LandingPage />} />
      
      
      {/* Catch all route - redirects to landing page */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default App
