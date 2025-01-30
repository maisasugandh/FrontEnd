import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import './App.css'
import { LandingPage } from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import { UserDashboard } from './components/UserDashBoard'
import { CarListings } from './components/CarListings'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from root to landing page */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Main routes */}
        <Route path="/home" element={<LandingPage />} />
        
        <Route path="/dashboard" element={<UserDashboard/>} />

        <Route path="/login" element={<Login/>}/>

        <Route path="/register" element ={<Register/>}/>
        
        <Route path="/cars" element={<CarListings />} />
        
        {/* Catch all route - redirects to landing page */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
