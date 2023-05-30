import React, { useState, useRef,  } from 'react'
import Fade from 'react-reveal/Fade';
import {aboutImage, aboutImageHovered, rectangleAbout} from '../assets/index'
import { motion, useViewportScroll ,useTransform, transform   } from "framer-motion";

const About = () => {
    
    const [items, setItems] = useState([
        {id: 1, isActive: true},
        {id: 2, isActive: false},
        {id: 3, isActive: false},
    ])
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    const handleClick = (id) => {
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
        );
        setItems(updatedItems);
    };

    return (
        <div className='container max-w-screen-xl mx-auto py-40 '>
            <Fade>
                <div className="text-box">
                    <div className='text-center'>
                        <span className='subheading'>//: ABOUT ME</span>
                        <h2 className='heading-2 mb-16'>WHO = "<span>AM I?</span>"</h2>
                    </div>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-12 items-center gap-4'>
                    <div className='col-span-5'>
                        <img src={aboutImageHovered} alt="" className='max-w-[70%] mx-auto rounded-md'/>
                    </div>
                    <div className='col-span-7'>
                        <div className={items[0].isActive ? 'about-item-active' : 'about-item'} onClick={() => handleClick(items[0].id)}>
                            <h3>About Me</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam a alias officia inventore sint minima voluptas ea qui facere maiores, totam sequi similique eos.</p>
                        </div>
                        <div className={items[1].isActive ? 'about-item-active' : 'about-item'} onClick={() => handleClick(items[1].id)}>
                            <h3>Web Development</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam a alias officia inventore sint minima voluptas ea qui facere maiores, totam sequi similique eos.</p>

                        </div>
                        <div className={items[2].isActive ? 'about-item-active' : 'about-item'} onClick={() => handleClick(items[2].id)}>
                            <h3>UI/UX Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam a alias officia inventore sint minima voluptas ea qui facere maiores, totam sequi similique eos.</p>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
  )
}

export default About