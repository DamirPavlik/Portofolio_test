import React from 'react'
import TypeIt from 'typeit-react'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import { motion, useViewportScroll } from "framer-motion";
import {PenGradient, RealPenGradient, CodeGradient, PaintningGradient} from '../assets/index'

const moveAnimation = {
    y: [0, 13, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
};

const Hero = () => {

  const { scrollY } = useViewportScroll();
  const [blur, setBlur] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get();
      const blurAmount = Math.min(scrollTop / 100, 20);
      setBlur(blurAmount);
    };
    scrollY.onChange(handleScroll);
    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY])

  return (

    <div className='container max-w-1700 py-28 md:py-40 relative' >
    <Fade bottom>

      <motion.div animate={moveAnimation} style={{ filter: `blur(${blur}px)` }} >
          <img src={PenGradient} alt="" className='w-[45px] md:w-[70px] absolute right-[10%] -top-[60px]'/>
      </motion.div>

      <motion.div animate={moveAnimation} style={{ filter: `blur(${blur}px)` }}>
          <img src={CodeGradient} alt="" className='w-[45px] md:w-[70px] absolute left-[12%] -top-[40px]'/>
      </motion.div>

      <motion.div animate={moveAnimation} style={{ filter: `blur(${blur}px)` }}>
          <img src={RealPenGradient} alt="" className='w-[45px] md:w-[70px] absolute left-[10%] top-80 lg:top-72'/>
      </motion.div>

      <motion.div animate={moveAnimation} style={{ filter: `blur(${blur}px)` }}>
          <img src={PaintningGradient} alt="" className='w-[45px] md:w-[70px] absolute right-[12%] top-64 lg:top-80 sm:top-[550px]'/>
      </motion.div>
        <div className='text-center'>
          <span className='text-purple font-spacemono'>Hello, my name is</span>
        </div>
          <h2 className='text-[40px] lg:text-[50px] text-gray font-spacemono font-bold text-center'>Damir Pavlik</h2>
          <h2 className='text-[50px] lg:text-[70px] text-slate font-spacemono font-bold text-center mt-0 lg:-mt-4' ><TypeIt options={{cursor: false , strings: ["I create engaging web experiences"], speed: 50, waitUntilVisible: true,}} /></h2>
          <p className='paragraph mt-8 md:max-w-[50%] w-full text-center mx-auto '>
If you are seeking a web developer who prioritizes both speed and quality in their work, then I would be an excellent match for your needs.</p>
          <div className='btn-wrapper text-center'>
            <NavLink to='/contact'><span className='btn'>Get In Touch &rarr;</span></NavLink>
          </div>
        </Fade>
    </div>
  )
}

export default Hero