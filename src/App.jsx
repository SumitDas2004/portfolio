import { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import ContactMe from './Components/ContactMe'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className=' scroll-smooth bg-[#f9fbc7] overflow-x-hidden snap-both snap-mandatory h-screen w-screen overflow-y-scroll'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <ContactMe/>
    </div>
  )
}

export default App
