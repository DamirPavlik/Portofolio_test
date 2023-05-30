import React from 'react'
import { CrvenoVinoAssets, GithubIcon, InternetIcon } from '../assets'
import { motion, useViewportScroll ,useTransform  } from "framer-motion";

const CrvenoVino = () => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div className='container max-w-screen-xxl mx-auto  overflow-hidden	pt-40 py-24'>
    <h3 className='heading-2 mb-2'>Crveno Vino</h3>
    <p className='paragraph'>“Crveno Vino” is a traditional restaurant based in Kovacica. </p>

    <motion.img src={CrvenoVinoAssets} alt="Crveno Vino mockups image" className="block mx-auto px-12 my-24" style={{scale}}/>

      <div className='grid  grid-cols-1 md:grid-cols-12 items-center'>
        <div className="col-span-5"></div>
        <div className="col-span-7">
          <p className='paragraph-lg mb-12'>I designed and developed a website for Crveno Vino, a restaurant that had never had an online presence before. Using Figma, I created a modern design that showcased their upscale atmosphere and menu. The resulting website included their whole menu and a gallery of their dishes, helping to increase their online visibility and engagement with customers.</p>
          <h4 className='text-[32px] text-slate font-jetbrainsmono'>TECHNOLOGIES</h4>
          <p className='paragraph-lg mb-4'>HTML, CSS, JavaScript, Figma</p>
          <div className="flex">
           <a href="#"><img src={GithubIcon} alt="" className='w-[35px] mr-2'/></a>
           <a href="https://crvenovino.rs/" target='_blank'><img src={InternetIcon} alt="" className='w-[35px]'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrvenoVino