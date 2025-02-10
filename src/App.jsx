import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/pages/HeroSection'


function App() {
  return (
    <div className="bg-red-500">
      <Header></Header>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App