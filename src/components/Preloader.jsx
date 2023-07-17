import React from 'react';
import { astronaut } from '../assets';
const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-tertiary z-10">
       <div className = "flex justify-center items-center mt-4"><img src={astronaut} alt="astronaut" width={'30%'} className="animate-spin-slow w-1/4 h-auto mx-auto justify-center"/></div>
      <p className="mt-4 text-secondary text-2xl">Loading . . .</p>
      
    </div>
  );
};

export default Preloader;