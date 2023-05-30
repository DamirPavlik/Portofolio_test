import React, {useEffect, useRef} from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import ContactComponent from '../components/ContactComponent'
import { useLocation } from 'react-router-dom';
import Projects from './Projects'

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const section = query.get('section');

    if (section === 'about') {
      aboutRef.current.scrollIntoView();
    } else if (section === 'skills') {
      skillsRef.current.scrollIntoView();
    } else if (section === 'projects') {
      projectsRef.current.scrollIntoView();
    } else if (section === 'testimonials') {
      testimonialsRef.current.scrollIntoView();
    }
  }, [location]);

  return (
    <section id='home-page'>
      <section id='hero'>
          <Hero />
      </section>

      <section id='skills'  ref={skillsRef}>
        <Skills />
      </section>

      <section id='projects' ref={projectsRef}>
        <Projects/>
      </section>

      <section id='testimonials' ref={testimonialsRef}>
        <Testimonials/>
      </section>

      <section id='about' ref={aboutRef}>
        <About />
      </section>

      
      {/* <section id='contactComponent'>
        <ContactComponent />
      </section> */}
    </section>
  )
}

export default Home