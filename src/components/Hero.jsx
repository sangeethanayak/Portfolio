import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import Typewriter from "typewriter-effect";
import { astronaut2 } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-auto h-auto mx-auto">
      
      <div className={`${styles.paddingX} relative inset-0 top-[50px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-slate-300`}>Hi, I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-violet-500">Sangeetha</span></h1>
          
          <p className={`${styles.heroSubText} mt-2 text-violet-300`}>
            
          <Typewriter
            options={{
            strings: ['Developer', 'Programmer', 'Student'],
            autoStart: true,
            loop: true,
          }}
         />
         </p>
          <br></br>
          <div className='cursor-pointer w-1/4'>
          <a href="https://drive.google.com/file/d/1NQf8EzxzPe3p3iVgXJ0vL8xKeeNia-Oe/view" alt="Resume" target="_blank">
          <button className="bg-slate-100 hover:bg-purple-700 text-tertiary font-bold py-2 px-4 rounded-xl inline-flex items-center hover:text-white" style={{ width: "100%", maxWidth: "200px" }}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span className='flex flex-col'style={{ flex: 1, textAlign: "center" }}>Resume</span>
          </button>
         </a>
         </div>
         <div className = 'astronaut' style={{ marginTop: "-50px"}}>
        <img src={astronaut2} alt="astronaut2" width={'30%'} className ='animate-flip w-1/3 h-auto mx-auto justify-center'/>
      </div>
        </div>
    </div>
      
      
    </section>
  )
}
export default SectionWrapper(Hero, "home");