import React from 'react'
import './LandingPage.css'

const AboutPage = () => {
  return (
    <div className='about-page h-screen overflow-x-clip relative flex justify-center flex-col items-center'>
      <div className='absolute bg-[#7F0627A8] h-[30vw] w-[45vw] left-[80%] rounded-[50%] top-[20%] circle'></div>

      <div className='flex flex-col w-[70%] gap-5'>
        <div className='title text-[7vw]'>Who are we?</div>
        <div className='aboutcontent text-center font-mono '>Founded in 2001, JSPM’s Rajarshi Shahu College of Engineering,  located in Tathawade, Pune, is a distinguished institution dedicated to  providing quality education in engineering. Affiliated with Savitribai  Phule Pune University.  In addition to its academic prowess, the Rotaract Club of Rajarshi  Shahu College of Engineering, Tathawade, Pune, has become a beacon  of community engagement and student involvement. With a thriving  community of thousands of students, the club organizes various  events that contribute to the holistic development of its members.   The Rotaract Club is esteemed as one of the best institutional-level  clubs within the college, providing students with opportunities for  personal growth, leadership development, and community service.  The diverse range of events organized by the club adds vibrancy to  campus life and fosters a sense of camaraderie among the students.</div>
      </div>

      <div className='absolute bg-[#7F0627A8] h-[20vw] w-[45vw] rounded-[50%] bottom-[-10%] right-[80%] circle'></div>
    </div>
  )
}

export default AboutPage