import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/banner.bg1.jpg)]  bg-cover"
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 160px"}}
    >
      <Navbar />
    
      <div className='container grid lg:grid-cols-2 h-[calc(60vh-40px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[130px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Ubaid</p>
          <p data-aos="zoom-in-up">Malik</p>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Hero
