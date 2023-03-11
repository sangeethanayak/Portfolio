import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas, Footer } from './components';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className=" bg-hero-pattern bg-cover bg-no-repeat">
       <Navbar />
       <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
