import React, {useRef} from 'react'
import {GymkoProjectsPage, CrvenoVinoProjectsPage, GithubIcon, InternetIcon, SocialNetworkProjectsPage} from '../assets/index'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Projects = () => {

  return (
    <div className="py-40">
      <Fade>
      <div className='container max-w-screen-xxl mx-auto  overflow-hidden	'>
     
        <div className='text-box'>
          <p className='subheading text-center'>//: PROJECTS</p>
          <h2 className='heading-2 text-center'>MY =<span> "WEB CREATIONS"</span></h2>
        </div>

        <div className='grid  grid-cols-2 md:grid-cols-12 items-center mt-12 gap-4'>

          <div className="col-span-6">
            <div className="pt-12 px-8 pb-10 bg-darkpurple relative rounded-[20px]">
              <h3 className='heading-3'>Gimnazija "Mihajlo Pupin" Kovacica</h3>
              <img src={GymkoProjectsPage} alt="" className='max-w-[40%] absolute bottom-0 right-[10%]'/>
              <div className='flex pt-6 pb-96'>
                <a href="#"><img src={GithubIcon} alt="" className='w-[25px] mr-2'/></a>
                <a href="#"><img src={InternetIcon} alt="" className='w-[25px]'/></a>
              </div>
              <Link to="project-1" className='btn-sm'>Read More &rarr;</Link>
            </div>
          </div>

          <div className="col-span-6">
            <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-4'>

              <div className="col-span-6">
                <div className="bg-darkpurple relative custom-pt-lg px-8 pb-8 rounded-[20px]">
                  <img src={CrvenoVinoProjectsPage} alt="" className='max-w-[115%]  absolute left-1/2 -top-10 transform -translate-x-1/2'/>
                  <div className=''>
                    <h3 className='heading-3 z-10'>Crveno <br/>Vino</h3>
                    <div className='flex justify-between items-center mt-4'>
                        <Link to="project-2" className='btn-sm z-10'>Read More &rarr;</Link>
                      <div className='flex justify-end'>
                        <a href="#"><img src={GithubIcon} alt="" className='w-[25px] mr-2 z-10'/></a>
                        <a href="#"><img src={InternetIcon} alt="" className='w-[25px] z-30'/></a>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-6">
                <div className="bg-darkpurple relative custom-pb-lg px-8 pt-8 pb-8 rounded-[20px] ">
                  <div className='flex justify-between'>
                    <div>
                      <h3 className='heading-3'>Social <br /> Network</h3>
                      <div className="mt-4">
                      <Link to='project-3' className='btn-sm'>Read More &rarr;</Link>
                      </div>
                    </div>

                    <div>
                   
                      <div className='flex justify-end'>
                        <a href="#"><img src={GithubIcon} alt="" className='w-[25px] mr-2 z-10'/></a>
                        <a href="#"><img src={InternetIcon} alt="" className='w-[25px] z-30'/></a>
                      </div>
                    </div>
                  </div>

                <img src={SocialNetworkProjectsPage} alt="" className='max-w-[130%]  absolute left-[60%] bottom-0 transform -translate-x-1/2'/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Projects