import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const FooterPage = () => {
  return (
    <div className='footer-page text-white overflow-clip relative bg-black  font-light h-screen '>
      <div className='absolute circle bg-[#7F0627A8] h-[30vw] w-[45vw] left-[80%] rounded-[50%] top-[10%] '></div>
      <div className="footercontent p-[5vw] flex h-[95%] justify-between items-center text-center">
        <div className="footermaincontent flex flex-col items-center">
          <div className='text-[3.1vw] text-[#BB4968] font-normal'>ROTARACT CLUB OF RSCOE</div>
          <div className="sep w-[30vw] rounded-lg h-[0.2vw] bg-white"></div>
          <div className='text-[1.4rem]'>Sponsored by Rotary Club of Akurdi</div>
          <div className='text-[1.4rem]'>Zone 03 | RID 3131</div>
          <div className='w-[20vw] text-[#FFFFFFB0]'>JSPM's Rajarshi Shahu College of EngineeringAshok Nagar, Tathawade, Pimpri-Chinchwad,Maharashtra 411033</div>
          <div className='text-[1.2rem]'>Email</div>
          <div className='text-[#BB4968]'>rscoerotaract@gmail.com</div>
          <div className='list-none flex gap-20'>
            <ul>
              <li className='text-[1.2rem]'>Connect with us</li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><FaLinkedin /></span><span>Linkedin</span></li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><FaInstagram  /></span><span>Instagram</span></li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><MdWhatsapp /></span><span>Whatsapp</span></li>
            </ul>
            <ul>
              <li className='text-[1.2rem]'>Useful Links</li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><IoIosArrowForward /></span><span>About</span></li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><IoIosArrowForward /></span><span>Event</span></li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><IoIosArrowForward /></span><span>Teams</span></li>
              <li className='flex items-center gap-[0.5vw]'><span className='text-[white]'><IoIosArrowForward /></span><span>Contacts</span></li>
            </ul>
          </div>
        </div>
        <div className="footermap w-[30vw] h-[20vw] z-10 bg-white"></div>
      </div>
      <div className="copyright text-center flex justify-center flex-col items-center">
        <div className="sep w-[50vw] rounded-lg h-[0.2vw] bg-white"></div>
        <div>© Copyright Rotaract Club. All Rights Reserved</div>
      </div>
      <div className='absolute circle bg-[#7F0627A8] h-[20vw] w-[45vw] rounded-[50%] bottom-[-10%] right-[80%] '></div>
    </div>
  )
}

export default FooterPage
