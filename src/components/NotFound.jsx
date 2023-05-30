import React from 'react'
import {NotFoundImg} from '../assets/index'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='container max-w-screen-md mx-auto h-[100vh] '>
      <div>
        <h2 className='text-center text-[50px] font-jetbrainsmono text-slate mb-10 mt-10'>//:<span className='text-purple'>404</span> Page Not Found</h2>
        <div className="text-center my-12">
        <Link to="/" className='btn'>Home Page</Link>
        </div>
        <img src={NotFoundImg} alt="Not Found Damir" className='max-w-[80%] block mx-auto'/>
      </div>
    </section>
  )
}

export default NotFound