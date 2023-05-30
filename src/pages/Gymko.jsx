import React from 'react'
import { GymkoAssets, GithubIcon, InternetIcon } from '../assets'
import { motion, useViewportScroll ,useTransform  } from "framer-motion";

const Gymko = () => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div className='container max-w-screen-xxl mx-auto  overflow-hidden	pt-40 py-24'>
    <h3 className='heading-2 mb-4'>Gymnasium "Mihajlo Pupin"</h3>
    <p className='paragraph max-w-[50%]'>Gymnasium “Mihajlo Pupin" is a high school that offers general education in Serbian and Slovak languages. It also offers an electrical engineering technician program.</p>

    <motion.img src={GymkoAssets} alt="Crveno Vino mockups image" className="block mx-auto px-12 my-24" style={{scale}}/>

      <div className='grid  grid-cols-1 md:grid-cols-12 items-center'>
        <div className="col-span-5"></div>
        <div className="col-span-7">
          <p className='paragraph-lg mb-12'>The gymnasium in Kovacica already had a website, but they needed a fresh new look. I provided a design in Figma and once they approved it, I began developing the website with my front-end web development skills. The end result was a modern, user-friendly website that accurately represented the school's values and mission. I developed every page with front-end technologies except the blog page, for that I converted my code into a WordPress Theme and added a WordPress plugin</p>
          <h4 className='text-[32px] text-slate font-jetbrainsmono'>TECHNOLOGIES</h4>
          <p className='paragraph-lg mb-4'>HTML, SASS, jQuery, JavaScript, WordPress, Figma</p>
          <div className="flex">
           <a href="#"><img src={GithubIcon} alt="" className='w-[35px] mr-2'/></a>
           <a href="#" target='_blank'><img src={InternetIcon} alt="" className='w-[35px]'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gymko