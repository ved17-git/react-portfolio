import { ThemeProvider } from './ThemeContext'; // Adjust import path as needed
import Contact from './Contact'
import Education from './Education'
import Navbar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'
import Start from './Start'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-300">
        <Navbar/>
        <Start/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </ThemeProvider>
  )
}

export default App