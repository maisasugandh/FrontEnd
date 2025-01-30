import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { LandingPage } from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
<<<<<<< HEAD
import { CarListings } from './components/CarListings'

function App() {
  return (
    <Routes>
      {/* Redirect from root to landing page */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* Main routes */}
      <Route path="/home" element={<LandingPage />} />
=======
import { UserDashboard } from './components/UserDashBoard'


function App() {
  return (
      <Routes>
        {/* Redirect from root to landing page */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Main routes */}
        <Route path="/home" element={<LandingPage />} />
        
        <Route path="/dashboard" element={<UserDashboard/>} />
>>>>>>> 2270a6f730db785046c833a1bef9426764c7a70d

      <Route path="/login" element={<Login/>}/>

      <Route path="/register" element ={<Register/>}/>

      <Route path="/cars" element={<CarListings />} />
      
      {/* Catch all route - redirects to landing page */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default App
