import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
const Skills = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {skills.map((skills) => (
        <div className='w-28 h-28' key={skills.name}>
          <BallCanvas icon={skills.icon} />
          <div>
            <h1 className='mt-3 text-secondary text-[18px] max-w-2xl leading-[30px]'>{`${skills.name}`}</h1>
            </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default SectionWrapper(Skills, "");