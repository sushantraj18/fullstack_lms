import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/pages/HeroSection'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import ToggleRegister from './components/pages/ToggleRegister'
import FacultyDashboard from './components/pages/FacultyDashboard'
import AdminRegister from './components/admin/AdminRegister'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminLogin from './components/admin/AdminLogin'


function App() {
  return (
    <BrowserRouter >
      <Header></Header>
    <Routes>
      <Route path="/" Component={HeroSection} />
      <Route path="/register" Component={ToggleRegister}/>
      <Route path="/dashboard" Component={FacultyDashboard}/>
      <Route path="/adminregister" Component={AdminRegister}/>
      <Route path="/admindashboard" Component={AdminDashboard}/>
      <Route path="/adminlogin" Component={AdminLogin}/>

    
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App