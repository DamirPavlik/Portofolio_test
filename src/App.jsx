import React from 'react'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import {BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import {Home, Projects, Contact, Gymko, CrvenoVino, SocialNetwork} from './pages/index'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact/> }/>
          <Route path='/project-1' element={<Gymko/>}/>
          <Route path='/project-2' element={<CrvenoVino/>} />
          <Route path='/project-3' element={<SocialNetwork/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App