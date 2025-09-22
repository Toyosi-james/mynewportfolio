"use client";

import React from 'react'
import Image from "next/image";
import { assets } from '../../../assets/assets';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";




const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
 <a href='' className='cursor-pointer mr-14 text-3xl font-semibold'>ToYoSi. </a>
   <div className='w-max flex items-center gap-2 mx-auto'>
    <Image src={assets.mail_icon} alt='' className='w-6' />
    Jamestoyosi84@gmail.com
   </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6' >
       <p>  © 2025 Toyosi James. All rights reserved.
        </p> 
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href='https://github.com/Toyosi-james'target='_blank' title='Github'>  <FiGithub size={25}/></a></li>
            <li><a href='http://linkedin.com/in/toyosi-james-891214370' target='_blank' title='linkedin'>
          <SlSocialLinkedin size={24} />
          </a></li>
          <li>          <a href='https://www.instagram.com/toyosispecial?igsh=bHJseThvdTRqc3R4' target='_blank' title='Instagram'></a> <BsInstagram size={24} />
</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
