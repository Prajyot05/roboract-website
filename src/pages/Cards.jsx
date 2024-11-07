import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


const Cards = (props) => {
  return (
    <div className=' border-[2px] border-black border-solid cards w-[235px] p-[20px] flex flex-col items-center justify-center rounded-xl flex-wrap '>
            <div className="mb-1">
        <img
          src={`${props.img}`}
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full object-cover"
        />
      </div>
      <h2 className="text-[20px] font-semibold leading-tight">{props.name}</h2>
      <div className="flex space-x-2 mt-[3vw]">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-blue-700 w-5 h-5" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-pink-500 w-5 h-5" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="text-blue-400 w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Cards
