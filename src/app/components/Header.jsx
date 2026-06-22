import React from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";



const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div> 
        <Image src={assets.Toyosi_image3} alt='' className='rounded-full w-32 mt-15'/>
      </div>
       <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>Hi! I'm Toyosi James <Image src={assets.hand_icon} alt='' className=' w-6'/></h3>
        {/* <ul className='flex items-center gap-5 justify-center mt-1 sm:mt-0'>
                   <li><a href='https://github.com/Toyosi-james'target='_blank' title='Github'>  <FiGithub size={25}/></a></li>
                   <li><a href='http://linkedin.com/in/toyosi-james-891214370' target='_blank' title='linkedin'>
                 <SlSocialLinkedin size={24} />
                 </a></li>
                 <li>          <a href='https://www.instagram.com/toyosispecial?igsh=bHJseThvdTRqc3R4' target='_blank' title='Instagram'></a> <BsInstagram size={24} />
       </li>
               </ul> */}
       <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Frontend Developer</h1>
       <p className='max-w-2xl mx-auto '>
        I am frontend developer who enjoys creating clean, responsive, and user-friendly web experiences. I love bringing ideas to life through simple and engaging designs.
        Interested in collaborating or seeing what I’m building? Feel free to connect!
       </p>
        <ul className='flex items-center gap-5 justify-center mt-1 sm:mt-0'>
                   <li><a href='https://github.com/Toyosi-james'target='_blank' title='Github'>  <FiGithub size={25}/></a></li>
                   <li><a href='http://linkedin.com/in/toyosi-james-891214370' target='_blank' title='linkedin'>
                 <SlSocialLinkedin size={24} />
                 </a></li>
                 <li>          <a href='https://www.instagram.com/toyosispecial?igsh=bHJseThvdTRqc3R4' target='_blank' title='Instagram'></a> <BsInstagram size={24} />
       </li>
               </ul>
       <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
        <a href='#contact'  className='bg-black text-white px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>contact me  <Image src={assets.right_arrow_white} alt='' className='rounded-full w-4'/></a>
        <a href='/TOYOSI CV 3.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='rounded-full w-4'/></a>
       </div>
    </div>
  )
}

export default Header
