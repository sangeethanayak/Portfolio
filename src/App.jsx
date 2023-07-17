import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Skills, Projects, StarsCanvas, Footer, Preloader } from './components';
import React, {useEffect, useState} from 'react';
const App = () => {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <BrowserRouter>
    <div>
      {
        loading? (
          <Preloader />
        ) : (
      
    <div className="relative z-0 bg-primary">
      
      
       <Navbar />
       <div className="relative z-0">
       <Hero />
       <About />
        <Skills />
        <Projects />
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
       )
      }
    </div>
    </BrowserRouter>
  )
}

export default App
