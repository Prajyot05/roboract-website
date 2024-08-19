import React from 'react'
import Cards from './Cards'


// pt-[10vw] pl-[3vw]
const TeamPage = () => {
  return (
    <div id='Team' className='team-page pb-[10vw] overflow-x-clip relative'>
      <div className='absolute circle bg-[#7F0627A8] h-[30vw] w-[45vw] left-[80%] rounded-[50%] top-[10%] '></div>
      <div className='flex relative flex-col  gap-[5vw]'>
        <div className=' relative w-fit left-[60%] top-[20%] mt-[4vw]  rounded-[2.5vw] teamtitle text-[5vw] p-[1vw] border-solid border-white  border-[2px]'>Meet our Team </div>
        <div className='teamcards flex flex-wrap justify-center items-center gap-[1vw]'>
          <Cards name={"President"} img={"/assets/team/President.jpg"} />
          <Cards name={"Secretary"} img={"/assets/team/Secretary.jpg"} />
          <Cards name={"Soham Patil"} img={"/assets/team/Soham Patil.jpg"} />
          <Cards name={"Treasurer"} img={"/assets/team/Treasurer.jpg"} />
          <Cards name={"Vijay Kale"} img={"/assets/team/Vijay Kale.jpg"} />
          <Cards name={"Yashodeep Gaikwad"} img={"/assets/team/Yashodeep Gaikwad.jpg"} />
        </div>
      </div>


      <div className='absolute circle bg-[#7F0627A8] h-[20vw] w-[45vw] rounded-[50%] bottom-[-10%] right-[80%] '></div>
    </div>
  )
}

export default TeamPage