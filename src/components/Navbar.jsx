import React, { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import './style.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState(false);

    let links = [
        { id: 1, link: 'Home', text: 'Home' },
        { id: 2, link: 'About', text: 'About' },
        { id: 3, link: 'Projects', text: 'Projects' },
        { id: 4, link: 'Skills', text: 'Skills' },
        { id: 5, link: 'Education', text: 'Education' }, // Changed 'contact' to 'Contact'
    ];
    const handle = () => {
        setIsActive(!isActive)
    }
    const colorChanger = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', colorChanger)
    return (
        <nav className={`navbar w-full h-20 fixed dark:bg-black flex items-center justify-between dark:text-white ${color && 'bg-white'}`}>
            <div className=' flex items-center'>
                <h1 className='px-8 text-3xl font-bold font-signature'>SajalGarg</h1>
                <button onClick={() => document.body.classList.toggle('dark')}
                    className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="block dark:hidden" fill="url(#gradient)" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill="url(#gradient)"></path>
                    </svg>

                    <svg className="fill-yellow-500 hidden dark:block" fill="url(#gradient)" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            {/* ----------------------------------------------------------------------- */}


            {/* ----------------------------------------------------------------------- */}
            <div className='flex px-8'>
                <ul className='gap-8 hidden md:flex'>
                    {links.map((link, id) => (
                        <li key={id} className={`dark:text-gray-400 text-black hover:scale-105 custom-not-hover duration-150 cursor-pointer `}>
                            <Link to={link.link} smooth={true} spy={true} offset={50}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className='md:hidden mr-6' onClick={() => setIsActive(!isActive)} role='button' aria-expanded={isActive} aria-controls='mobile-menu'>
                    {isActive ? <FiX /> : <FiAlignJustify className='md:hidden' />}
                </div>
            </div>
            {isActive && (
                <ul id='mobile-menu' className='flex flex-col justify-center items-center gap-8 absolute top-20 left-0 h-80 w-full bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-100'>
                    {links.map(link => (
                        <li key={link.id} className='dark:text-gray-400 hover:capitalize text-bold hover:scale-105 custom-not-hover duration-150 cursor-pointer'>
                            <Link to={link.link} onClick={() => handle()} smooth duration={500}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
