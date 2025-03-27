import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <About/>
      <Education/>
      <Experience/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
