import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { skills } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import autoprefixer from 'autoprefixer';


const Skills = () => {
  return (
    <div className='container max-w-screen-xxl mx-auto  overflow-hidden py-52 '>
        <div className='grid  grid-cols-1 md:grid-cols-12 items-center'>
      <Fade>
        <div className="col-span-5">
              <span className='subheading'>//: SKILLS</span>
              <h2 className='heading-2'>WHAT = <br/>"<span>I OFFER</span>"</h2>
              <p className='paragraph mt-12 ml-6 w-full '>I offer a unique combination of youthful creativity and technical expertise. I am constantly learning and staying up-to-date with the latest trends and technologies in front-end web development, which allows me to deliver cutting-edge solutions that meet and exceed client expectations.</p>
        </div>
      </Fade>

        <div className='col-span-7'>
            <Swiper
            spaceBetween={40}
            slidesPerView={"auto"}
            >
            {skills.map((skill, idx) =>(
              <SwiperSlide >
                <div className='card'>
                  <h4 className='text-slate font-jetbrainsmono text-[25px]'>//:{skill.title}</h4>
                  <img className='w-[75px]' src={skill.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
          
          </div>
        </div>
  )
}

export default Skills