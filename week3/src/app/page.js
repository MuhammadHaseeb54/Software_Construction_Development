import React from 'react'
import { FaFacebook, FaTools, FaPlus, FaCog } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function page() {
  return (
    <div className='bg-[#0a0e2a] text-white h-screen'>
      {/* Section 1 start */}
      <div className='flex items-center justify-between px-10 py-5'>
        <p className='font-bold'>HOME</p>
        <button className='bg-blue-600 px-10 py-2.5 rounded-[10px]'>CV</button>
      </div>
      {/* Section 2 start */}
      <div className=' w-[40%] m-auto flex flex-col items-center p-10 gap-3.5'>
        <h1 className='text-4xl text-blue-500 font-bold'>Minions</h1>
        <h3>Actor and Cartoon</h3>
        <p> Minions premiered in London on June 11, 2015, and was released in the United States.</p>
        <div className='w-62.5 flex justify-between'>
          <FaFacebook className='h-[24px] w-[24px]'/>
          <FaYoutube className='h-[24px] w-[24px]'/>
          <RiInstagramFill className='h-[24px] w-[24px]'/>
        </div>
        <img src='/minions5.jpg' alt='' className='w-[150px] h-[150px] rounded-full py-[5px]' />
      </div>
      {/* Section 3 start */}
      <div className='mt-[20px]'>
        <p></p>
      </div>
      {/* Services Section Start */}
      <div className="bg-[#0a0e2a] text-white w-full px-10 py-10">
        <h2 className="text-2xl font-bold mb-2">Services I Offer</h2>
        <p className="mb-6">
           Minions premiered in London on June 11, 2015, and was released in the United States
          on July 10 by Universal Pictures. It grossed $1.16 billion worldwide
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 min-w-[250px] max-w-[350px] flex flex-col items-center shadow-md">
            <FaTools className="text-4xl mb-2" />
            <h3 className="font-bold mb-2">Dummy Text</h3>
            <p className="text-sm mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <span className="text-xs text-gray-500">Dummy text</span>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 min-w-[250px] max-w-[350px] flex flex-col items-center shadow-md">
            <FaPlus className="text-4xl mb-2" />
            <h3 className="font-bold mb-2">Dummy Text</h3>
            <p className="text-sm mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <span className="text-xs text-gray-500">Dummy text</span>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 min-w-[250px] max-w-[350px] flex flex-col items-center shadow-md">
            <FaCog className="text-4xl mb-2" />
            <h3 className="font-bold mb-2">Dummy Text</h3>
            <p className="text-sm mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.</p>
            <span className="text-xs text-gray-500">Dummy text</span>
          </div>
        </div>
      </div>
      {/* Image Gallery Section (LAST) */}

      <div className="bg-[#0a0e2a] text-white w-full px-10 py-10">
        <h2 className="text-2xl font-bold mb-2">Service I Offer</h2>
        <p className="mb-6">
           Minions premiered in London on June 11, 2015, and was released in the United States
          on July 10 by Universal Pictures. It grossed $1.16 billion worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "/minions.jpg",
            "/minions2.jpg",
            "/minions3.jpg",
            "/minions4.jpg",
            "/minions5.jpg",
            "/minions6.jpg"
          ].map((img, index) => (
            <div
              key={index}
              className="w-full h-[250px] overflow-hidden rounded-lg border border-gray-700"
            >
              <img
                src={img}
                alt={`minion-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page

