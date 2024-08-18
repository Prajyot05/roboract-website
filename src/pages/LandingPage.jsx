import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-page h-screen overflow-x-clip relative flex justify-center flex-col items-center'>
      <div className='absolute circle bg-[#7F0627A8] h-[30vw] w-[45vw] left-[80%] rounded-[50%] top-[10%] '></div>
      <div className='main border-solid border-[4px]  border-[rgb(255,255,255)] p-[3vw] pt-[5vw] pb-[5vw] gap-[5vw] h-[50%] bg-[#f8f3f370] w-[75vw] flex flex-col justify-center rounded-[1.5rem]'>
      <div className='mobilelogoshow'>
      <div className='w-[10vw]'><img src="/assets/rscoe.png" alt="" srcset="" /></div>
      <div className='w-[8vw]'><img src="/assets/logo.png" alt="" srcset="" /></div>
      </div>

        <div className=' clubtitle title text-center  '>Rotaract Club</div>
        <div className='flex h-[50%] justify-evenly items-center pb-[2vw] text-[3vw] '>
          <div className='w-[8vw] logo'><img src="/assets/logo.png" alt="" srcset="" /></div>
          <div className='text-center clubsubtitle font-light'>
            <div className='relative top-[2vw]'>of</div>
            <div>Rajarshi Shahu College of</div>
            <div className='relative bottom-[2vw]'>Engineering</div>
          </div>
          <div className='w-[10vw] logo'><img src="/assets/rscoe.png" alt="" srcset="" /></div>
        </div>
      </div>
      <div className='absolute circle bg-[#7F0627A8] h-[20vw] w-[45vw] rounded-[50%] bottom-[-10%] right-[80%] '></div>
    </div>
  )
}

export default LandingPage