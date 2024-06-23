import React, { useState, useEffect, useRef } from 'react';
import bootstrap from '../assets/skills/bootstrap.png'
import c from '../assets/skills/c.png'
import cpp from '../assets/skills/c++.png'
import css from '../assets/skills/CSS.png'
import github from '../assets/skills/github.png'
import html from '../assets/skills/html.png'
import js from '../assets/skills/js.png'
import nextjs from '../assets/skills/nextJs.png'
import reactjs from '../assets/skills/react.png'
import mysql from '../assets/skills/MySQL.png'
import nodejs from '../assets/skills/node.png'
import python from '../assets/skills/python.png'
import tailwind from '../assets/skills/tailwind.png'
import mongodb from '../assets/skills/Mongodb.png'
import Firebase from '../assets/skills/Firebase.png'
import Docker from '../assets/skills/Docker.png'
import postgresql from '../assets/skills/postgresql.png'
import Postman from '../assets/skills/postman.png'
import Appwrite from '../assets/skills/appwrite.png'

const FrontEndskills = [
    { id: 1, name: 'HTML', progress: '80%', background_Color: '#E24F24', src: html },
    { id: 2, name: 'CSS', progress: '70%', background_Color: 'blue', src: css },
    { id: 3, name: 'JavaScript', progress: '90%', background_Color: '#DAB92C', src: js },
    { id: 4, name: 'React', progress: '85%', background_Color: '#08D5F9', src: reactjs },
    { id: 5, name: 'TypeScript', progress: '60%', background_Color: 'purple', src: js },
    { id: 6, name: 'Bootstrap', progress: '75%', background_Color: '#8A2BE2', src: bootstrap },
    { id: 7, name: 'Tailwind CSS', progress: '70%', background_Color: 'blue', src: tailwind },
];

const BackEndskills = [
    { id: 1, name: 'Node.js', progress: '85%', background_Color: 'green', src: nodejs },
    { id: 2, name: 'MongoDB', progress: '90%', background_Color: 'red', src: mongodb },
    { id: 3, name: 'Firebase', progress: '75%', background_Color: 'orange', src: Firebase },
    { id: 4, name: 'MySQL', progress: '75%', background_Color: 'orange', src: mysql },
    { id: 5, name: 'Docker', progress: '70%', background_Color: '#2496EC', src: Docker },
    { id: 6, name: 'PostgreSQL', progress: '80%', background_Color: '#336691', src: postgresql },
    { id: 7, name: 'nextjs', progress: '80%', background_Color: 'black', src: nextjs },
];

const ExtraSkills = [
    { id: 1, name: 'GitHub', progress: '85%', background_Color: 'green', src: github },
    { id: 2, name: 'Python', progress: '65%', background_Color: '#D0AC25', src: python },
    { id: 3, name: 'C++', progress: '80%', background_Color: '#0180CD', src: cpp },
    { id: 4, name: 'C', progress: '70%', background_Color: '#00599D', src: c },
    { id: 5, name: 'Postman', progress: '80%', background_Color: '#FD6C35', src: Postman },
    { id: 6, name: 'Appwrite', progress: '90%', background_Color: '#F02D65', src: Appwrite },
];


const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;

            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
            setScrollProgress(scrollPercentage);

            if (ref.current && !isVisible) {
                const rect = ref.current.getBoundingClientRect();
                const isVisibleInViewport = rect.top <= windowHeight && rect.bottom >= 0;
                setIsVisible(isVisibleInViewport);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <div name="Skills" ref={ref} className="min-h-screen w-full bg-slate-100 bg-gradient-to-b dark:from-black dark:to-gray-800 relative flex justify-center">
            <div className='lg:w-[64%] flex flex-col items-center'>
                <div className='mb-4 mt-8 py-4'>
                    <div className="flex items-center">
                        <h1 className='heading text-3xl font-bold md:text-5xl h-16 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400'>My Skills</h1>
                        <div className="ml-2 w-10 border-b-4 border-black dark:border-slate-400"></div>
                        <div className="ml-2 w-4 border-b-4 border-black dark:border-slate-400"></div>
                        <div className="ml-1 w-1 border-b-4 border-black dark:border-slate-400"></div>
                    </div>

                </div>
                <div className='min-h-screen m-2 w-full grid md:grid-cols-2 grid-cols-1 md:px-6 px-4'>
                    <div className='frontend shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-200 md:min-h-[320px] md:w-[380px] rounded-md mt-6 pt-2'>
                        <h2 className='text-center text-3xl bg-clip-text font-bold dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Frontend</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 m-4">
                            {FrontEndskills.map(skill => (
                                <div key={skill.id} className="w-full p-4">
                                    <div className="flex mb-1 items-center gap-2 justify-center">
                                        <h3 style={{ color: skill.background_Color }}>{skill.name}</h3>
                                        <img src={skill.src} height={40} width={40} className="shadow-md" />
                                    </div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar text-center relative" style={{ width: isVisible ? skill.progress : '0', backgroundColor: skill.background_Color }}><p className=' absolute top-[-3px] text-white font-bold text-xs left-1/2 bottom-0'>{skill.progress}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='Backend shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-200 md:h-[380px] md:w-[380px] rounded-md mt-6 pt-2'>
                        <h2 className='text-center text-3xl bg-clip-text font-bold dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Backend</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 m-2 mb-4">
                            {BackEndskills.map(skill => (
                                <div key={skill.id} className="w-full p-4">
                                    <div className="flex mb-1 gap-2 items-center justify-center">
                                        <h3 style={{ color: skill.background_Color }}>{skill.name}</h3>
                                        <img src={skill.src} height={40} width={40} className="shadow-md" />
                                    </div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar relative" style={{ width: isVisible ? skill.progress : '0', backgroundColor: skill.background_Color }}><p className=' absolute top-[-3px] text-white font-bold text-xs left-1/2 bottom-0'>{skill.progress}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='Others shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gradient-to-b dark:from-black dark:to-gray-800 bg-slate-200 md:h-[380px] md:w-[380px] rounded-md mt-6 pt-2'>
                        <h2 className='text-center text-3xl bg-clip-text font-bold dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Other Services</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 m-4">
                            {ExtraSkills.map(skill => (
                                <div key={skill.id} className="w-full p-4">
                                    <div className="flex mb-1 gap-2 items-center justify-center">
                                        <h3 style={{ color: skill.background_Color }}>{skill.name}</h3>
                                        <img src={skill.src} height={40} width={40} className="shadow-md" />
                                    </div>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar relative" style={{ width: isVisible ? skill.progress : '0', backgroundColor: skill.background_Color }}><p className=' absolute top-[-3px] text-white font-bold text-xs left-1/2 bottom-0'>{skill.progress}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Skills;
