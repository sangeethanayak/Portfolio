import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Sangeetha</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <Typewriter
            options={{
            strings: ['ECE student', 'Front-End Developer', 'VLSI enthusiast'],
            autoStart: true,
            loop: true,
          }}
         />
          </p>
          <div>
          </div>
          <br></br>
          <button
            type='button'
            className='bg-white py-2 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary cursor-pointer'
          >
            {"Resume"}
          </button>
        </div>
        
        
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#home'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
          </a>
        </div>
    </section>
  )
}
export default SectionWrapper(Hero, "home");