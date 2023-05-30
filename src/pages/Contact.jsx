import React, {useState, useEffect, useRef} from 'react';
import {LinkedinIcon, GithubIcon} from '../assets/index'
import { useForm } from '../Hooks/useForm';
import TypeIt from 'typeit-react'
import { Caret } from '../components/Caret';
import {SubmitImg, SubmitBlackImg} from '../assets/index'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [values, handleChange] = useForm({
    name: '',
    email: '',
    body: '',
    subject: '',
  })

  const [btnHover, setBtnHover] = useState(false)

  const [emailText, setEmailText] = useState("")

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const emailBodyRef = useRef(null);
  const form = useRef();

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [emailBodyFocus, setEmailBodyFocus] = useState(false);

  const isValidEmail= () => {
    let em = values.email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(em)){
      return true
    }else{
      return false
    }
  }

  const sendEmail = () => {
    emailjs.sendForm('service_7aem87f', 'template_8eodo6f', form.current, 'TMgHg1agttm-tsB2n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSendMail = () =>{
    if(isValidEmail() === false || values.name === '' || values.subject === '' || values.body === '' || values.body.length <= 2 || values.subject.length <= 2 || values.name.length <= 2){
      console.log('Please Fill Out All The Fields');
      setEmailText('//ERROR: please fill out all the fields correctly')
      return
    }
    values.name = ''
    values.email = ''
    values.subject = ''
    values.body = ''
    setEmailText('//email sent successfully')
    sendEmail()
  }

  let getNameComment = () =>{
    let name = values.name

    if(name === ''){
      return `//click me to input your name`
    }else if(name.length <= 2){
      return `//name must be atleast 2 characters`
    }else{
      return ``
    }
  }

  let getEmailComment = () =>{
    let em = values.email;

    if(em === ''){
      return `//click me to input your email`
    } else if (isValidEmail()){
      return `//awesome`
    } else if(isValidEmail() === false){
      return `//email is invalid`
    }
  }

  let getEmailSubjectComment = () =>{
    let emailSubject = values.subject

    if(emailSubject === ''){
      return `//what is this email about?`
    }else if(emailSubject.length <=2){
      return `//email subject must be atleast 2 characters`
    }
  }

  let getEmailBodyComment = () =>{
    let emailBody = values.body

    if(emailBody === ''){
      return `//what do you want to say?`
    }else if(emailBody.length <= 2){
      return `//email Body Must be atleast 2 characters`
    }else{
      return ``
    }
  }

  const handleNameClick = (e) => {
    e.preventDefault()
    nameRef.current.focus();
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    emailRef.current.focus();
  }

  const handleSubjectClick = (e) => {
    e.preventDefault()
    subjectRef.current.focus();
  }

  const handleEmailBodyClick = (e) => {
    e.preventDefault()
    emailBodyRef.current.focus();
  }

  return (
    <div className='container max-w-screen-xxl mx-auto  overflow-hidden pb-40 pt-20'>

      <div className="">
        <p className='text-purple font-jetbrainsmono text-center text-[20px]'>//: LET'S TALK</p>
        <h3 className='text-[50px] text-center leading-tight font-extrabold font-jetbrainsmono text-slate'>GET IN TOUCH</h3>
        <p className='text-gray font-jetbrainsmono text-center mt-2'>send me a brief message and I will respond to you promplty.</p>
      </div>

      <form className="inputContainer" ref={form} onSubmit={handleSendMail}>
          <input className='scale-0' type="text" name='name' value={values.name} onChange={handleChange} ref={nameRef} onFocus={()=>{setNameFocus(true)}} onBlur={()=>{setNameFocus(false)}}/>
          <input className='scale-0' type="text" name='email' value={values.email} onChange={handleChange} ref={emailRef} onFocus={()=>{setEmailFocus(true)}} onBlur={()=>{setEmailFocus(false)}}/>
          <input className='scale-0' type="text" name='subject' value={values.subject} onChange={handleChange} ref={subjectRef} onFocus={()=>{setSubjectFocus(true)}} onBlur={()=>{setSubjectFocus(false)}}/>
          <textarea className='scale-0' type="text" name='body' value={values.body} onChange={handleChange} ref={emailBodyRef} onFocus={()=>{setEmailBodyFocus(true)}} onBlur={()=>{setEmailBodyFocus(false)}}/>
      </form>

      <div>
        <div className="text-contactText">
          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">00<span className='text-comment ml-10'><TypeIt options={{cursor: false ,strings: ["//damir.pavlik@gmail.com"], speed: 50, waitUntilVisible: true,}} /></span></p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">01<span className='text-comment ml-10'></span></p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">02<span className='text-purpleContact ml-10'>class </span><span className='text-yellowContact'>ContactForm </span>{"{"}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">03<span className='text-purpleContact ml-14'>constructor</span><span className='text-comment'>() </span>{"{"}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px] cursor-pointer" onClick={(e) =>{handleNameClick(e)}}>04<span className="text-redContact ml-20">this</span>.<span className="text-blueContact">name</span> = <span className="text-greenString">"{values.name}{nameFocus ? <Caret/> : ''}"</span> {getNameComment()}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px] cursor-pointer" onClick={(e)=>{handleEmailClick(e)}}>05<span className="text-redContact ml-20">this</span>.<span className="text-blueContact">email</span> = <span className="text-greenString">"{values.email}{emailFocus ? <Caret/> : ''}"</span> {getEmailComment()}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">06<span className="ml-14">{"{"}</span></p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">07<span className="text-yellowContact ml-14">emailBody</span>() {"{"}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">08<span className="text-purpleContact ml-20">return</span> {"{"}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px] cursor-pointer" onClick={(e) => {handleSubjectClick(e)}}>09<span className="text-greenString ml-24">'subject'</span> : <span className='text-greenString'>"{values.subject}{subjectFocus ? <Caret/> : ''}"</span> {getEmailSubjectComment()}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px] cursor-pointer" onClick={(e) => {handleEmailBodyClick(e)}}>10<span className="text-greenString ml-24">'body'</span> : <span className='text-greenString'>"{values.body}{emailBodyFocus ? <Caret/> : ''}"</span> {getEmailBodyComment()}</p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">11<span className="ml-20">{"{"}</span></p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">12<span className="ml-14">{"{"}</span></p>
          </div>

          <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">13<span className="ml-10">{"{"}</span></p>
          </div>

          {emailText === "" ? null : <div className="code-line font-jetbrainsmono">
            <p className="text-numbergray text-[20px]">14<span className="ml-10 text-numbergray">{emailText}</span></p>
          </div>}

          <div className="mt-8 ml-8 ">
            <button className='btn flex items-center' onClick={handleSendMail} onMouseEnter={() => setBtnHover(prevHover => !prevHover)} onMouseLeave={() => setBtnHover(prevHover => !prevHover)}>Submit <img src={btnHover ? SubmitBlackImg : SubmitImg} alt="Form Submit Icon" className='w-[25px] ml-[10px]' /></button>
          </div>

          <div className='flex mt-8 ml-8'>
            <a href="#"><img src={GithubIcon} alt="" className='max-w-[25px] mr-2' /></a>
            <a href="#"><img src={LinkedinIcon} alt="" className='max-w-[25px]' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact