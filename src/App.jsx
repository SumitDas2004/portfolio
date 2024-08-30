import { useState } from "react"
import About from "./about/About"
import Contact from "./contact/Contact"
import Home from "./Home/Home"
import Projects from "./Projects/Projects"
import Skills from "./skills/Skills"
import SmallScreenNavbar from "./SmallScreenNavbar/SmallScreenNavbar"
import TopNavbar from "./TopNavbar/TopNavbar"

function App() {
  const [selected, setSelected] = useState(1)

  return (
    <div className="overflow-x-hidden h-screen w-full">
      <Home setSelected={setSelected}/>
      <About setSelected={setSelected}/>
      <Skills setSelected={setSelected}/>
      <Projects setSelected={setSelected}/>
      <Contact setSelected={setSelected}/>
      <SmallScreenNavbar selected={selected}/>
      <TopNavbar selected={selected}/>
    </div>
  )
}

export default App
