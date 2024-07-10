import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import ContactMe from './Components/ContactMe'
import Navbar from './Components/Navbar'
import { textFlag } from 'cursor-effects'

function App() {
  new textFlag({text: "Have a nice day!",color:["#f55e5670"]});
  return (
    <div className=' scroll-smooth bg-[#fcffa0] overflow-x-hidden snap-both snap-mandatory h-screen w-screen overflow-y-scroll'>
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
