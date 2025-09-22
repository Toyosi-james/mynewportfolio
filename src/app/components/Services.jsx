import { assets, serviceData } from "../../../assets/assets";
import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="w-full px-[8%] md:px-[12%] py-5 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-gray-300">What I Offer</h4>
      <h2 className="text-center text-4xl md:text-5xl text-black dark:text-white">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-sm md:text-base text-gray-800 dark:text-gray-200">
        I'm a frontend developer who loves bringing ideas to life on the web. 
        I enjoy creating clean, responsive, and user-friendly websites that 
        look great and work smoothly across all devices.
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-400 dark:border-gray-600 rounded-lg px-6 md:px-8 py-8 md:py-12 
                       hover:shadow-[4px_4px_0_#000] cursor-pointer 
                       hover:bg-[#fcf4ff] dark:hover:bg-gray-700 
                       hover:-translate-y-1 duration-500"
          >
            <div className="bg-pink-500 p-3 w-fit rounded-2xl">
              <Image src={icon} alt={title} className="w-8 md:w-10" />
            </div>
            <h3 className="text-base md:text-lg my-3 md:my-4 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm my-3 md:my-2 leading-5 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-4 md:mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} className="w-3 md:w-4" alt="arrow" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
