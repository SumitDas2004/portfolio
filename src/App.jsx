import About from "./about/About"
import Contact from "./contact/Contact"
import Home from "./Home/Home"
import Projects from "./Projects/Projects"
import Skills from "./skills/Skills"
import SmallScreenNavbar from "./SmallScreenNavbar/SmallScreenNavbar"
import TopNavbar from "./TopNavbar/TopNavbar"

function App() {


  return (
    <div className="overflow-x-hidden h-screen w-full">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SmallScreenNavbar/>
      <TopNavbar/>
    </div>
  )
}

export default App
