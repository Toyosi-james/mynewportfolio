import React from 'react';

const Work = () => {
  return (
    <div id='work' className="w-full px-[12%] py-5 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-gray-300">My portfolio</h4>
      <h2 className="text-center text-4xl md:text-5xl text-black dark:text-white">My Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-800 dark:text-gray-200 md:text-base">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <section className="flex flex-wrap justify-center items-center gap-10">
        {/* PiggyVest */}
        <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 rounded-lg hover:scale-[1.02] border border-gray-400 dark:border-gray-600
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/borabeauty.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">Bora Beauty Business page</h1>
            <p className="text-gray-700 dark:text-gray-300 font-bold">Tech Stack: Next Js, Tailwind CSS</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/Toyosi-james/borabeauty" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://borabeauty.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Movie App */}

        {/* <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 hover:scale-[1.02] border border-gray-400 dark:border-gray-600 rounded-lg
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/movie.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">Movie App</h1>
            <p className="text-gray-700 dark:text-gray-300 font-bold">Tech Stack: JS, SwiperJS, Movie API</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/Toyosi-james/movieBox" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://toyosi-james.github.io/movieBox/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div> */}

        {/* Moove Homepage */}
        <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 hover:scale-[1.02] border border-gray-400 dark:border-gray-600 rounded-lg
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/crypto.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">CryptoPulse App</h1>
            <p className="text-gray-700 dark:text-gray-300 font-bold">Tech Stack: Next Js, Tailwind Css, API</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/Toyosi-james/cryptoPulse" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://crypto-pulse-murex.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Weather App */}
        <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 hover:scale-[1.02] border border-gray-400 dark:border-gray-600 rounded-lg
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/weather.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">Weather App</h1>
            <p className="text-gray-700 dark:text-gray-300 font-bold">Tech Stack: React, CSS, Weather API</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/Toyosi-james/weatherApp" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://weather-app-ruddy-eight-61.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Antiques E-commerce */}
        <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 hover:scale-[1.02] border border-gray-400 dark:border-gray-600 rounded-lg
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/antiquities.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">Antiques E-commerce</h1>
            <p className="text-gray-700 dark:text-gray-300 font-bold">Tech Stack: HTML, CSS, JavaScript</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/Toyosi-james/weatherApp" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://all-restaurant-retail-antiquties-warehouse-oxio.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* TradeLink Marketplace */}
        <div className="w-[350px] bg-[#fcf4ff] dark:bg-gray-800 pb-4 hover:scale-[1.02] border border-gray-400 dark:border-gray-600 rounded-lg
                        hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-gray-700 hover:-translate-y-1 duration-500">
          <img className="w-[350px] mb-5 rounded-t-lg" src="/tradelink.png" alt="" />
          <div className="px-3">
            <h1 className="text-[18px] font-bold text-black dark:text-white">TradeLink Marketplace</h1>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] font-bold">Tech Stack: React Js, Tailwind CSS, API</p>
          </div>
          <div className="px-3 py-4 flex items-center gap-3">
            <a className="bg-black text-[#fcf4ff] p-2 font-bold rounded-[5px]" href="https://github.com/TradeLink1/tradelink-main" target="_blank" rel="noopener noreferrer">View Project</a>
            <a className="border-2 border-gray-400 dark:border-gray-600 p-2 rounded-[5px] font-bold" href="https://tradelinkfe.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
