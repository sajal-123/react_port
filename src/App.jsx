import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
function App() {
  return (
    <div className='sticky left-0 top-0'>
    <Navbar/>
    <HeroSection/>
    <SocialLinks/>
    <About/>
    <Education/>
    <Projects/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App
