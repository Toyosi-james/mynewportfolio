import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '../../../assets/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-5 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg text-gray-700 dark:text-gray-300'>Introduction</h4>
      <h2 className='text-center text-5xl text-black dark:text-white'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.Toyosi_image2} alt='user' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl text-gray-800 dark:text-gray-200'>
            I’m a frontend developer with a passion for creating modern and responsive web experiences. I enjoy turning ideas into functional designs that are not only visually appealing but also easy to use. My focus is on building clean, interactive, and accessible interfaces that make the web enjoyable for everyone. I’m constantly learning, improving, and exploring new ways to bring creativity and functionality together.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li
                key={index}
                className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer
                  hover:bg-[#fcf4ff] dark:hover:bg-gray-700
                  hover:text-gray-700 dark:hover:text-gray-200
                  hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-800 dark:text-white'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 dark:text-gray-300'>My Languages & Frameworks</h4>
          <ul className='flex items-center gap-3 sm:gap-5 flex-wrap'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:translate-y-1 duration-500'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
