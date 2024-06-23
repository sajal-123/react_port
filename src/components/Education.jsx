import React from 'react'
import './style.css';

const Education = () => {
  return (
    <div name="Education" className="flex justify-center items-center flex-col h-full dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-100 lg:pt-8">
      <div className="flex items-center">
        <h1 className='heading text-3xl font-bold md:text-5xl h-16 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400'>My Education </h1>
        <div className="ml-2 w-10 border-b-4 border-black dark:border-slate-400"></div>
        <div className="ml-2 w-4 border-b-4 border-black dark:border-slate-400"></div>
        <div className="ml-1 w-1 border-b-4 border-black dark:border-slate-400"></div>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 p-8 rounded-lg mb-6 shadow-[inset_-12px_-8px_40px_#46464620]">

        <div className="border-l-4 border-purple-400 dark:bg-gradient-to-b dark:from-gray-700 dark:to-black bg-slate-100 rounded-md p-9 ml-4">
          <div className="mb-6">
            <div className="flex items-center">
              <div className="dot w-3 h-3 text-transparent bg-gradient-to-b from-purple-500 to-blue-400 rounded-full border-2 border-white"></div>
              <div className="details bg-slate-300 text-white p-4 rounded-r-lg ml-2">
                <div className="font-bold text-slate-900">2022 - Now</div>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 ">National Institute of Delhi</div>
                <div className="bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400 font-bold">Bachelor of Technology in Computer Science and Engineering</div>
                <div className="text-slate-900">CGPA - 7.66</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <div className="dot w-3 h-3 text-transparent bg-gradient-to-b from-purple-500 to-blue-400 rounded-full border-2 border-white"></div>
              <div className="details bg-slate-300 text-white p-4 rounded-r-lg ml-2">
                <div className="font-bold text-slate-800">2019 - 2021</div>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400">ChittrGupt Inter College</div>
                <div className="text-slate-900 ">Class 10+2</div>
                <div className="text-slate-900 ">Percentage - 82%</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <div className="dot w-3 h-3 text-transparent bg-gradient-to-b from-purple-500 to-blue-400 rounded-full border-2 border-white"></div>
              <div className="details bg-slate-300 text-white p-4 rounded-r-lg ml-2">
                <div className="font-bold text-slate-900">2016 - 2021</div>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400">ChittrGupt Inter College</div>
                <div className="text-slate-900">Class 6 - 9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education


