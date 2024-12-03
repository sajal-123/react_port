import { useEffect } from 'react'
import Typed from 'typed.js';
import './style.css';
import Myself from '../assets/Images/Myself/my_self_2.png'
const HeroSection = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["FrontEnd Developer.", "Backend Developer.", "Web Designer."],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup Typed.js on unmount
    };
  }, []);
  return (
    <div name="Home" className='flex flex-col-reverse items-center justify-center md:flex-row h-screen w-full dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-100'>
      <div className="flex flex-col w-full md:w-1/2 md:gap-10 gap-4 max-md:items-center px-6 md:px-0">
        <h1 className='heading text-3xl font-bold mt-20 md:mt-0 md:text-7xl bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>I am a </h1>
        <h1 className='text-3xl font-bold mt-2 md:mt-0 md:h-20 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-blue-500'><span id="element"></span></h1>
        
        <p className='text-md dark:text-white font-normal'>I am an experienced full stack developer proficient in React.js, Tailwind CSS, Next.js, Node.js, and Express, with a year of hands-on practice. Currently seeking new opportunities to leverage my skills and contribute effectively to innovative projects.</p>
       
        <div className="flex gap-4">
          <a href="https://drive.google.com/file/d/1wNtWYifxuMNie0jjUSJyjftfz8UJ5UBA/view" target='_blank'>
            <button
              color="transparent" type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40 me-2 mb-2"
            >Get Resume</button>
          </a>
          <button
            color="transparent" type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40 me-2 mb-2"
          >
            <a href='mailto:sajalag78@gmail.com?subject=Subject&body=Message body' >Hire Me</a>
          </button>
        </div>
      </div>
      <div className='profile md:mt-0 mt-20 h-80 w-60 relative overflow-hidden ml-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl'>
        <img src={Myself} alt=""  className='Profile_Image absolute top-8 scale-110'/>
      </div>
    </div>
  )
}

export default HeroSection
