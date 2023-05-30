import React from 'react'
import {GithubIcon, LinkedinIcon} from '../assets/index'

const Footer = () => {
  return (
    <footer className={`bg-navblack w-full overflow-hidden`} >
      <div className='py-6 container max-w-screen-xxl flex-custom' >
        <div className='text-box'>
          <p className='text-slate font-jetbrainsmono'><span className='font-bold'>Damir</span> Pavlik</p>
        </div>

        <div className='icon-box flex'>
          <a href="https://github.com/DamirPavlik" target='_blank'><img src={GithubIcon} className='max-w-[20px] ' alt="Damir Pavlik Github" /></a>
          <a href="https://www.linkedin.com/in/damir-pavlik-1374341a6/"><img src={LinkedinIcon} className='max-w-[20px] ml-4' alt="Damir Pavlik LinkedIn" /></a>
        </div>
      </div>
      <div className="max-w-screen-xxl block mx-auto">
        <hr className='text-navtext max-w-[100%]'/>
        </div>
      <div className="footer-end py-4">
        <p className='text-center text-navtext font-jetbrainsmono text-[14px]'>&copy; all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer