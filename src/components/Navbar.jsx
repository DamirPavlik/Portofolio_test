import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import {close, menu} from '../assets'
import { useLocation , NavLink } from 'react-router-dom'
import styles from '../style'
import Home from '../pages/Home'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header className={`bg-bgblack w-full overflow-hidden ${scrolled ? "scrolled" : ""}`} >

          <nav className='py-6 flex justifiy-between items-center navbar container ' >
              <h4 className='font-spacemono text-slate text-[16px]'><NavLink to="/">Damir <span className='font-bold'>Pavlik</span></NavLink></h4>
          
            
              <ul className='list-none md:flex hidden justify-end items-center flex-1'>
                <li className={`font-spacemono font-normal cursor-pointer text-[14px] text-slate hover:text-purple transition duration-150 ease-linear  mr-10`}>
                <NavLink to={{ pathname: "/", search: "?section=skills" }}><span className='text-purple'>01. </span>Skills</NavLink>
                </li>

                <li className={`font-spacemono font-normal cursor-pointer text-[14px] text-slate hover:text-purple transition duration-150 ease-linear  mr-10`}>
                <NavLink to={{ pathname: "/", search: "?section=projects" }}><span className='text-purple'>02. </span>Projects</NavLink>
                </li>

                <li className={`font-spacemono font-normal cursor-pointer text-[14px] text-slate hover:text-purple transition duration-150 ease-linear  mr-10`}>
                <NavLink to={{ pathname: "/", search: "?section=testimonials" }}><span className='text-purple'>03. </span>Testimonials</NavLink>
                </li>

                <li className={`font-spacemono font-normal cursor-pointer text-[14px] text-slate hover:text-purple transition duration-150 ease-linear  mr-10`}>
                <NavLink to={{ pathname: "/", search: "?section=about" }}><span className='text-purple'>04. </span>About</NavLink>
                </li>

                <li className={`font-spacemono font-normal cursor-pointer text-[14px] text-slate hover:text-purple transition duration-150 ease-linear  `}>
                <NavLink to={"/contact"}><span className='text-purple'>05. </span>Contact</NavLink>
                </li>

                <a href='#' className='transition-all linear duration-300 text-purple ml-10 text-[14px] rounded-[5px] py-2 px-5 border border-purple hover:bg-purple hover:text-bgblack'>Resume</a>
              </ul>

              <div className="md:hidden flex flex-1 justify-end items-center z-30">
                <img src={toggle ? close : menu} alt="" onClick={() => setToggle(prevToggle => !prevToggle)}/>  
                <div className={`${toggle ? 'flex' : 'hidden'} w-full bg-navblack fixed top-[72px] left-0`}>
                  <ul>
                  <li className={`font-spacemono font-normal text-[14px] text-slate py-3 px-6`}>
                    <NavLink to={{ pathname: "/", search: "?section=skills" }}><span className='text-purple'>01. </span>Skills</NavLink>
                  </li>

                  <li className={`font-spacemono font-normal text-[14px] text-slate py-3 px-6`}>
                    <NavLink to={{ pathname: "/", search: "?section=projects" }}><span className='text-purple'>02. </span>Projects</NavLink>
                  </li>

                  <li className={`font-spacemono font-normal text-[14px] text-slate py-3 px-6`}>
                    <NavLink to={{ pathname: "/", search: "?section=testimonials" }}><span className='text-purple'>03. </span>Testimonials</NavLink>
                  </li>

                  <li className={`font-spacemono font-normal text-[14px] text-slate py-3 px-6`}>
                    <NavLink to={{ pathname: "/", search: "?section=about" }}><span className='text-purple'>04. </span>About</NavLink>
                  </li>

                  <li className={`font-spacemono font-normal text-[14px] text-slate py-3 px-6  `}>
                    <NavLink to={"/contact"}><span className='text-purple'>05. </span>Contact</NavLink>
                  </li>
                    <div className='py-6 px-6'>
                      <a href='#' className='transition-all linear duration-300 text-purple py-3 px-6 text-[14px] rounded-[5px] border border-purple'>Resume</a>
                    </div>
                  </ul>
                </div>   
              </div>

              {/* <div  className='md:hidden flex flex-1 justify-end items-center z-30'>
                <img src={toggle ? close : menu} alt="" onClick={() => setToggle(prevToggle => !prevToggle)}/>     
                <div className={`${toggle ? 'flex' : 'hidden' } w-full bg-navblack absolute top-[72px] left-0 `}>
                    <ul className=''>
                      {navLinks.map((nav, idx)=>(
                        <li className={`text-spacemono font-normal text-[14px] text-slate py-3 px-6 ${idx === navLinks.length-1 ? 'pb-6' : ''}`}>
                          <a href="#">
                            <span className='text-purple '>{nav.idx}</span>
                            {nav.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div> */}
          </nav>
      </header>

  )
}

export default Navbar