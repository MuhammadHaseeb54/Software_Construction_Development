
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const ProfileSection = () => (
  <div className='w-[40%] m-auto flex flex-col items-center p-10 gap-3.5'>
    <h1 className='text-4xl text-blue-500 font-bold'>Minions</h1>
    <h3>Actor and Artist</h3>
    <p>This is an example of a personal portfolio website.</p>
    <div className='w-62.5 flex justify-between'>
      <FaFacebook className='h-[24px] w-[24px]'/>
      <FaYoutube className='h-[24px] w-[24px]'/>
      <RiInstagramFill className='h-[24px] w-[24px]'/>
    </div>
    <img src='/minions.jpg' alt='Mohid' className='w-[150px] h-[150px] rounded-full py-[5px]' />
  </div>
);

export default ProfileSection;