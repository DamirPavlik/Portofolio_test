import React from 'react'
import {gymkoLogoSlate} from '../assets/index'
import Fade from 'react-reveal/Fade';


const Testimonials = () => {
  return (
    <div className='py-40'>
        <Fade>
        <div className='container max-w-screen-xxl mx-auto  overflow-hidden'>
            <div className='grid  grid-cols-2 md:grid-cols-12 items-center mt-12 gap-12'>
                <div className="col-span-5">
                    <p className='subheading'>//: TESTIMONIALS</p>
                    <h2 className='heading-2'>KIND = "<span>WORDS ABOUT MY WORK</span>"</h2>
                </div>
                <div className="col-span-7">
                    <p className='font-spacemono text-gray leading-relaxed mb-12 text-[20px]'>"We were very happy with x's work and professionalism. He was very responsive and was quickly adapting to our change of focus and deadlines. The end result is a consistent beautiful website and very helpful video tutorials on how to use the new CMS. We would highly recommend working with him."</p>
                    <div className='flex items-center'>
                        <img src={gymkoLogoSlate} alt='Gymko Logo' className='w-[70px] mr-4'/>
                        <div>
                            <p className='font-spacemono text-slate font-bold'>Gimnazija "Mihajlo Pupin" Kovacica</p>
                            <p className='font-spacemono text-purple font-bold'>Kovacica, Serbia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    </div>
  )
}

export default Testimonials